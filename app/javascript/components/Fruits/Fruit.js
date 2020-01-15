import React, { Component } from "react"
import Button from "react-bootstrap/Button";

class Fruit extends Component {

  constructor(props) {
    super(props)

    this.state = {
      editMode: false
    }
  }

  changeEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  handleEdit = () => {
    this.setState({
      editMode: !this.state.editMode
    })
    let fruit = {
      name: this.refs.name.value,
      description: this.refs.description.value
    }
    this.props.editFruit(this.refs.id.value, fruit)
  }

  render() {
    const { fruit, deleteFruit, editFruit } = this.props
    const renderEditMode = () => {
      return (
        <div>
          {this.state.editMode == true ? (
            <div>
              <input
                type="text"
                defaultValue={fruit.name}
                ref="name"
                placeholder={fruit.name}
              />
              <input
                type="text"
                defaultValue={fruit.description}
                ref="description"
                placeholder={fruit.description}
              />
              <input type="hidden" ref="id" value={fruit.id} />
              <Button className="btn btn-primary" onClick={this.handleEdit}>
                Update
              </Button>
              <Button onClick={this.changeEditMode}>Cancel</Button>
            </div>
          ) : (
            <div>
              {fruit.name} - {fruit.description}{" "}
              <Button onClick={this.changeEditMode}> Edit</Button>
            </div>
          )}
          <Button onClick={() => deleteFruit(fruit.id)}>Delete Fruit</Button>
        </div>
      );
      }
      return (
        <div>
          {renderEditMode()}
        </div>
      );
  }
}

export default Fruit
