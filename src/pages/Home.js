import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import Search from '../components/Search';
import Card from '../components/Card';
import Category from '../components/Category';

const Home = ({ userId }) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const options = [
    { label: 'All', value: 'all' },
    { label: 'Breakfast', value: 'Breakfast' },
    { label: 'Lunch', value: 'Lunch' },
    { label: 'Dinner', value: 'Dinner' },
    { label: 'Dessert', value: 'Dessert' },
    { label: 'Appetizers & Snacks', value: 'Appetizers & Snacks' },
    { label: 'Vegan', value: 'Vegan' },
    { label: 'Drinks', value: 'Drinks' },
  ];

  useEffect(() => {
    loadRecipeData(); // Load all recipes on mount
  }, []);

  // Load all recipes
  const loadRecipeData = async () => {
    try {
      const response = await axios.get('http://localhost:2000/recipes');
      if (response.status === 200) {
        // Check if userId is available before filtering
        const userRecipes = userId
          ? response.data.filter(recipe => recipe.userId === userId)
          : response.data;
        setData(userRecipes);
        setFilteredData(userRecipes); // Initially show all data
      } else {
        toast.error('Something went wrong!');
      }
    } catch (error) {
      toast.error('Failed to fetch recipes.');
      console.error(error);
    }
  };
  

  // Handle category selection
  const handleCategory = (category) => {
    if (category === 'all') {
      setFilteredData(data); // Show all data for "All Posts"
    } else {
      const filtered = data.filter((item) => item.category === category);
      setFilteredData(filtered); // Update filtered data
    }
  };

  // Handle search input change
  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:2000/recipes?q=${searchValue}`);
      if (response.status === 200) {
        const userRecipes = userId
          ? response.data.filter(recipe => recipe.userId === userId)
          : response.data;
        setFilteredData(userRecipes);
      } else {
        toast.error('Something went wrong!');
      }
    } catch (error) {
      toast.error('Failed to fetch search results.');
      console.error(error);
    }
  };

  //handle delete
  const handleDelete = async (id) => {
    if (!id) {
      toast.error("Invalid recipe ID");
      return;
    }
  
    try {
      const response = await axios.delete(`http://localhost:2000/recipes/${id}`);
      if (response.status === 200) {
        toast.success("Recipe deleted successfully!");
        setData((prevData) => prevData.filter((recipe) => recipe.id !== id));
        setFilteredData((prevFilteredData) =>
          prevFilteredData.filter((recipe) => recipe.id !== id)
        );
      } else {
        toast.error("Failed to delete the recipe.");
      }
    } catch (error) {
      toast.error("Error deleting recipe.");
      console.error(error);
    }
  };
  

  // Truncate long strings
  const excerpt = (str) => {
    return str.length > 60 ? str.substring(0, 60) + '...' : str;
  };

  return (
    <section className="home-section">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <Search
            searchValue={searchValue}
            onInputChange={onInputChange}
            handleSearch={handleSearch}
          />
        </div>

        <Row className="justify-content-center mb-4 mt-4">
          <Col md={8} className="text-center">
            <h1 className="all-posts-title">ALL RECIPES</h1>
          </Col>
        </Row>

        {/* Pass category options and handler */}
        <Category handleCategory={handleCategory} options={options} />
      </div>

      <div className="row justify-content-center" style={{ gap: '2.5rem' }}>
        {filteredData.length === 0 && (
          <div className="container my-4">No Recipe Found</div>
        )}

        {filteredData.map((item, index) => (
          <Card
            key={index}
            {...item}
            ingredients={excerpt(item.ingredients)}
            instructions={excerpt(item.instructions)}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
