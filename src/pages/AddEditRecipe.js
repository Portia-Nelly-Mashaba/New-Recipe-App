import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

//dmpmbgngu

const initialState = {
  name: "",
  ingredients: "",
  instructions: "",
  category: "",
  prepTime: "",
  servings: "",
  cookTime: "",
  imageUrl: ""
}

const options = [ 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Appetizers & Snacks', 'Vegan', 'Drinks']


const AddEditRecipe = () => { 
  const [formValue, setformValue] = useState(initialState);
  const [categoryErrMessage, setCategoryErrMessage ] = useState(null);
  const { name, ingredients, instructions,category, prepTime, servings, cookTime, imageUrl} = formValue

  const handleSubmit = (e) =>{}

  const onInputChange = (e) =>{}

  const onCategoryChange = () =>{}

  const onUploadImage = (file) =>{}

  return (
    <form onSubmit={handleSubmit} className="container mt-5 p-4 shadow-lg rounded bg-light">
      <h2 className="mb-4 text-center">Add New Recipe</h2>
      <hr />

      {/* Recipe Name */}
      <div className="form-group mt-4 mb-3 col-8">
        <label htmlFor="recipeName" className="form-label">Recipe Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="name" 
          value={name}
          name='name'
          onChange={onInputChange}
          placeholder="Enter recipe name" 
          required
        />
      </div>

      {/* Ingredients */}
      <div className="form-group mb-3">
        <label htmlFor="ingredients" className="form-label">Ingredients</label>
        <textarea 
          className="form-control"  
          id="ingredients" 
          rows="4" 
          value={ingredients}
          name='ingredients'
          onChange={onInputChange}
          placeholder="List ingredients here"
          required
          >
        </textarea>
      </div>

      {/* Instructions */}
      <div className="form-group mb-3">
        <label htmlFor="instructions" className="form-label">Instructions</label>
        <textarea 
          className="form-control" 
          id="instructions" 
          rows="4" 
          value={instructions}
          name='instructions'
          onChange={onInputChange}
          placeholder="Describe the steps"
          required
          >
        </textarea>
      </div>

      {/* Category and Preparation Time */}
      <div className="row mb-3">
        <div className="col form-group">
          <label htmlFor="category" className="form-label">Category</label>
          <select className="form-control" id="category" onChange={onCategoryChange} value={category}>
          <option value="">Select Category</option>
            {options.map((option, index) => (
              <option key={index} value={option || ""}>{option}</option>
            ))}
          </select>
        </div>
        <div className="col form-group">
          <label htmlFor="prepTime" className="form-label">Preparation Time (minutes)</label>
          <input 
            type="number" 
            className="form-control" 
            id="prepTime" 
            value={prepTime}
            name='prepTime'
            onChange={onInputChange}
            placeholder="e.g., 15" />
        </div>
      </div>

      {/* Cooking Time and Servings */}
      <div className="row mb-3">
        <div className="col form-group">
          <label htmlFor="cookTime" className="form-label">Cooking Time (minutes)</label>
          <input 
            type="number" 
            className="form-control" 
            id="cookTime" 
            value={cookTime}
            name='cookTime'
            onChange={onInputChange}
            placeholder="e.g., 30" 
            required
          />
        </div>
        <div className="col form-group">
          <label htmlFor="servings" className="form-label">Servings</label>
          <input 
            type="number" 
            className="form-control" 
            id="servings" 
            value={servings}
            name='servings'
            onChange={onInputChange}
            placeholder="e.g., 4" />
        </div>
      </div>

      {/* Image Upload */}
      <div className="form-group mb-3">
        <label htmlFor="recipeImage" className="form-label">Upload Image</label>
        <input 
          type="file" 
          className="form-control" 
          onChange={(e) => onUploadImage(e.target.file)}
          id="image" 
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button type="submit" className="btn mt-3" style={{ backgroundColor: '#9A616D', color: 'white', fontSize: '18px' }}>Add Recipe</button>
      </div>
    </form>
  );
}

export default AddEditRecipe;
