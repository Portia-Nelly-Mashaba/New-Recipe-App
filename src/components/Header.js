// Header.js
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaAppleAlt } from 'react-icons/fa';
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      {/* Top Navigation Bar */}
      <Navbar expand="lg" className="justify-content-between">
        <Nav className="left-links">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/add-recipe">ADD RECIPE</Nav.Link>
          <Nav.Link href="/my-recipe">MY RECIPE</Nav.Link>
        </Nav>
        <div className="title-container">
        <FaAppleAlt className="me-3" style={{ color: '#9A616D', fontSize: '2rem' }} />
        <span className="title">MZANSI FLAVA</span>
        </div>
        <Nav className="social-icons">
          <Nav.Link href="/login">LOGIN</Nav.Link>
          <Nav.Link href="#pinterest">
            <i className="fab fa-pinterest-p"></i>
          </Nav.Link>
          <Nav.Link href="#twitter">
            <i className="fab fa-twitter"></i>
          </Nav.Link>
          <Nav.Link href="#instagram">
            <i className="fab fa-instagram"></i>
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* Background Image */}
      <div className="image-container">
        <img
          src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Food Background"
          className="header-image"
        />
        
       
      </div>
    </div>
  );
};

export default Header;
