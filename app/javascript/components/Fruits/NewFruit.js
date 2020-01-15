import React, { Component } from 'react';
import { render } from 'react-dom';

class NewFruit extends Component {
  state = {
    formFields: {}
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.formFields.name.value, this.state.formFields.description.value)
    event.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={input => this.state.formFields.name = input} placeholder="Enter the name of a fruit" />
        <input ref={input => this.state.formFields.description = input} placeholder="Enter a description" />
        <button>Submit</button>
      </form>
    )
  }
}

export default NewFruit;
