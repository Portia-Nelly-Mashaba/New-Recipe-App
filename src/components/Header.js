import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaAppleAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          const response = await fetch(`http://localhost:2000/users/${userId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }
          const user = await response.json();
          const firstName = user.name.split(' ')[0];
          setUserName(firstName); 
          setIsAuthenticated(true); 

          // Log user details to the console
          console.log(`User ID: ${userId}`);
          console.log(`User Name: ${user.name}`);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    setUserName('');
    navigate('/login');
  };

  return (
    <div className="header-container">
      <Navbar expand="lg" className="justify-content-between">
        <Nav className="left-links">
          <Nav.Link href="/home">HOME</Nav.Link>
          <Nav.Link href="/add-recipe">ADD RECIPE</Nav.Link>
          <Nav.Link href="/my-recipe">MY RECIPE</Nav.Link>
        </Nav>
        <div className="title-container">
          <FaAppleAlt className="me-3" style={{ color: '#9A616D', fontSize: '2rem' }} />
          <span className="title">MZANSI FLAVA</span>
        </div>
        <Nav className="social-icons">
          {isAuthenticated ? (
            <>
              <Nav.Link href="/profile">{userName}</Nav.Link>
              <Nav.Link onClick={handleLogout}>LOGOUT</Nav.Link>
            </>
          ) : (
            <Nav.Link href="/login">LOGIN</Nav.Link>
          )}
          <Nav.Link href="#twitter">
            <i className="fab fa-twitter"></i>
          </Nav.Link>
          <Nav.Link href="#instagram">
            <i className="fab fa-instagram"></i>
          </Nav.Link>
        </Nav>
      </Navbar>
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
