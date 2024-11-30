import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Search = ({ handleSearch, searchValue, onInputChange }) => {


  return (
    <Container className="search-container">
      <Row className="justify-content-center align-items-center">
        <Col md={8} lg={6} className="search-col">
          <form onSubmit={handleSearch}> 
            <InputGroup className="search-input-group">
              <FormControl
                type='search'
                placeholder="Search..."
                aria-label="Search"
                value={searchValue}
                onChange={onInputChange} 
                className="search-input form-control-lg"
              />
              <Button
                variant="dark"
                className="search-button px-4"
                onClick={handleSearch} 
                // style={{ backgroundColor: '#9A616D', border: '#9A616D' }}
              >
                <FaSearch />
              </Button>
            </InputGroup>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
