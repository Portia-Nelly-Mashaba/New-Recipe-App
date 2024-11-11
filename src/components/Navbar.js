import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => (
  <Navbar bg="light" variant="light" expand="lg" className="justify-content-center">
    <Nav>
      <Nav.Link href="/home">HOME</Nav.Link>
      <Nav.Link href="/create">ADD RECIPE</Nav.Link>
      <Nav.Link href="/myrecipe">MY RECIPE</Nav.Link>
    </Nav>
  </Navbar>
);

export default CustomNavbar;
