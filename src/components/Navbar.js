import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class NavigationBar extends Component {

render() {
  return (
  <>
  <Navbar bg="light" variant="light">
    {/* <Navbar.Brand href='/'>Personal Trainer App</Navbar.Brand> */}
    <Nav className="mr-auto">
      <Nav.Link href='/'>Customerlist</Nav.Link>
      <Nav.Link href='/Traininglist'>Traininglist</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
  </>
    )
  }
}