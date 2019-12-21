import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class NavigationBar extends Component {

render() {
  return (
  <>
  <Navbar bg="light" variant="light">
    <Nav className="mr-auto">
      <Nav.Link href='/'>Customerlist</Nav.Link>
      <Nav.Link href='/trainings'>Traininglist</Nav.Link>
    </Nav>
  </Navbar>
  </>
    )
  }
}