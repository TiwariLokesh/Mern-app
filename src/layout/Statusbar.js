// Statusbar.js
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
            <Link className='text-decoration-none text-dark px-4' to="/">Home</Link>
            <Link className='text-decoration-none text-dark' to="/login">Login</Link>
          </Nav>
            <Button variant="outline-success">Search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Statusbar;
