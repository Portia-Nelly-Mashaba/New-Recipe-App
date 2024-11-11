import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => (
  <Navbar bg="light" variant="light" expand="lg" className="justify-content-center">
    <Nav>
      <Nav.Link href="/home">HOME</Nav.Link>
      <Nav.Link href="/add">ADD RECIPE</Nav.Link>
      <Nav.Link href="/my-recipe">MY RECIPE</Nav.Link>
    </Nav>
  </Navbar>
);

export default CustomNavbar;
