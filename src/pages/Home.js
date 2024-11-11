import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Card from '../components/Card';

const Home = () => {
  return (
    <section className="home-section">
      <Container>
        
        {/* Search Bar */}
        <Row className="justify-content-center mb-4">
          <Col md={8} lg={6}>
            <InputGroup>
              <FormControl
                placeholder="Search..."
                aria-label="Search"
                className="search-input"
              />
              <Button variant="dark">
                <FaSearch />
              </Button>
            </InputGroup>
          </Col>
        </Row>

        {/* Title: All Posts */}
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h1 className="all-posts-title">ALL RECIPES</h1>
          </Col>
        </Row>

        {/* Categories */}
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <nav className="category-nav">
              <a href="#all" className="category-link">All Posts</a>
              <a href="#quick-easy" className="category-link">Quick & Easy</a>
              <a href="#vegetarian" className="category-link">Vegetarian</a>
              <a href="#main-course" className="category-link">Main Course</a>
            </nav>
          </Col>
        </Row>
        
      </Container>
      <Card />
    </section>
  );
};

export default Home;

