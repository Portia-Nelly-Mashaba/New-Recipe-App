import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Badge from '../components/Badge';

const SingleRecipe = () => {
  const [recipe, setRecipe] = useState(null); // Default to null
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleRecipe();
    }
  }, [id]);

  const getSingleRecipe = async () => {
    try {
      const response = await axios.get(`http://localhost:2000/recipes/${id}`);
      if (response.status === 200) {
        setRecipe(response.data);
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      toast.error('Error fetching recipe: ' + error.message);
    }
  };

  // Render loading state while `recipe` is null
  if (!recipe) {
    return <div>Loading...</div>;
  }

  // Split ingredients and instructions by newline character, filter empty items, and map to list items
  const ingredientsList = recipe.ingredients
    .split('\n')
    .filter((item) => item.trim() !== '') // Filter out empty lines
    .map((item, index) => <li key={index}>{item}</li>);

  const instructionsList = recipe.instructions
    .split('\n')
    .filter((item) => item.trim() !== '') // Filter out empty lines
    .map((item, index) => <li key={index}>{item}</li>);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Admin"
                  className="rounded-circle"
                />
                <div className="ms-2">
                  <small>Admin</small>
                  <small className="text-muted"> · {recipe.date} </small>
                </div>
              </div>
              <h1 className="fw-bold">{recipe.name}</h1>
              <Link to="/home" className="text-primary">
                ← Go back to Home
              </Link>
              <div className="mt-3">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  className="img-fluid rounded" 
                  style={{width: '100%', maxHeight: '600px'}}
                />
              </div>
              <div className="mt-4">
                
                <div className="d-flex align-items-center">
                  <h4 className="flex-grow-1">Recipe Details</h4>
                  <Badge className="badge bg-primary">{recipe.category}</Badge>
                </div>
                <h5 className="fw-bold">{recipe.name}</h5>
                <h6 className="fw-bold">Ingredients</h6>
                <ul className="text-muted">{ingredientsList}</ul>
                <h6 className="fw-bold">Instructions</h6>
                <ul className="text-muted">{instructionsList}</ul>
                <h6 className="fw-bold">Preparation Time</h6>
                <p className="text-muted">{recipe.prepTime} minutes</p>
                <h6 className="fw-bold">Cooking Time</h6>
                <p className="text-muted">{recipe.cookTime} minutes</p>
                <h6 className="fw-bold">Servings</h6>
                <p className="text-muted">{recipe.servings}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
