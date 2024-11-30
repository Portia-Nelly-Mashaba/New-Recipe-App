import React, {useState, useEffect} from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Card from '../components/Card';
import axios from 'axios';
import { toast } from 'react-toastify';


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadRecipeData();
  }, [])

  const loadRecipeData = async () => {
    const response = await axios.get('http://localhost:2000/recipes')
    if(response.status === 200){
      setData(response.data)
    } else {
      toast.error('Somehing went wrong!')
    }
  };

  // console.log('data', data);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete the recipe?")) {
      try {
        const response = await axios.delete(`http://localhost:2000/recipes/${id}`);
        if (response.status === 200) {
          toast.success("Recipe Deleted Successfully");
          loadRecipeData(); // Refresh the recipe list
        } else {
          toast.error("Something went wrong!");
        }
      } catch (error) {
        console.error("Error deleting recipe:", error);
        toast.error("An error occurred while deleting the recipe.");
      }
    }
  };
  

  const excerpt = (str) => {
    if(str.length > 50) {
      str = str.substring(0, 60) + '...'
    }
    return str;
  }
  
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
              <a href="#quick-easy" className="category-link">Breakfast</a>
              <a href="#vegetarian" className="category-link">Lunch</a>
              <a href="#main-course" className="category-link">Dessert</a>
              <a href="#quick-easy" className="category-link">Appetizers & Snacks</a>
              <a href="#vegetarian" className="category-link">Vegan</a>
              <a href="#main-course" className="category-link">Drinks</a>
            </nav>
          </Col>
        </Row>
        
      </Container>

      {/* <Card /> */}
      {/* Recipes */}
      <div className="row justify-content-center" style={{ gap: '2.5rem' }}>
          {data.length === 0 && (
            <div className="container my-4">No Recipe Found</div>
          )} 

           {data && data.map((item, index) => (
                <Card key={index}  
                      {...item}
                      ingredients={excerpt(item.ingredients)}
                      instructions={excerpt(item.instructions)}
                      handleDelete ={handleDelete}
                />
            ))}
        </div>
    </section>
  );
};

export default Home;

