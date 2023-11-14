
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link as={Link} to="/">List</Nav.Link>
          <Nav.Link as={Link} to="/add-contact">Add Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
