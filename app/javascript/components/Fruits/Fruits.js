import React, { Component } from "react"

import Fruit from './Fruit';

class Fruits extends Component {
  render() {
    const { fruits, deleteFruit, editFruit } = this.props
    return (
      <div>
        {fruits.map(fruit => {
          return <Fruit key={fruit.id} fruit={fruit} deleteFruit={deleteFruit} editFruit={editFruit} />
        })}
      </div>
    );
  }
}

export default Fruits
