import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

class Home extends React.Component {
  render () {
    return (
      <Jumbotron fluid >
        <Container>
          <h1>Welcome to Fruits!</h1>
        </Container>
      </Jumbotron>
    );
  }
}

export default Home
