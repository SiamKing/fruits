import React, { Component } from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">FRUITY FRUITS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="fruits">Fruits</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
