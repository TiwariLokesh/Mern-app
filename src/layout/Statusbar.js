// Statusbar.js
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function Statusbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
            <Button variant="outline-success">Search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Statusbar;
