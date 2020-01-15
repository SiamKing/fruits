import React from "react"

import Fruits from './Fruits'
import NewFruit from './NewFruit'
import { config } from '../../Constants'

const API = config.url.API_URL,
      HEADERS = { 'Content-Type': 'application/json' }

class FruitsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fruits: []
    }
  }

  handleFormSubmit = (name, description) => {
    let body = JSON.stringify({ fruit: { name: name, description: description } })
    
    fetch(API, {
      method: 'POST',
      headers: HEADERS,
      body: body
    })
      .then(res => res.json())
      .then(fruit => {
        this.addNewFruit(fruit)
    })
  }

  handleDeleteFruit = id => {
    fetch(`${API}/${id}`, {
      method: 'DELETE',
      headers: HEADERS,
      id: id
    })
      .then(res => this.deleteFruit(id))
      .catch(err => console.log("ERROR", err))

  }

  handleEditFruit = (id, fruit) => {
    let body = JSON.stringify({ fruit: { name: fruit.name, description: fruit.description } })
    fetch(`${API}/${id}`, {
      method: 'PATCH',
      headers: HEADERS,
      id: id,
      body: body
    })
      .then(res => res.json())
      .then(fruit => this.updateFruits(fruit))
  }

  updateFruits = updatedFruit => {
    let updatedFruits = this.state.fruits.map(fruit => {
      if (fruit.id === updatedFruit.id) {
        return updatedFruit
      }
      return fruit
    })
    this.setState({
      fruits: updatedFruits
    })
  }

  deleteFruit = id => {
    this.setState({
      fruits: this.state.fruits.filter(fruit => {
        return fruit.id !== id
      })
    })
  }

  addNewFruit = fruit => {
    this.setState({
      fruits: this.state.fruits.concat(fruit)
    })
  }

  componentDidMount() {
    fetch("/api/v1/fruits.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          fruits: data
        })
      })
      .catch(err => console.log("ERROR", err))
  }

  render() {
    const { fruits } = this.state
    return (
      <div className="container">
        <Fruits fruits={fruits} deleteFruit={this.handleDeleteFruit} editFruit={this.handleEditFruit} />
        <NewFruit handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default FruitsContainer
