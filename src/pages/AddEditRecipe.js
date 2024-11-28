import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const { name, ingredients, instructions, category, prepTime, servings, cookTime, imageUrl} = formValue

  const navigate = useNavigate();

  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Show an error if category is not selected
    if (!category) {
      setCategoryErrMessage('Please select Category');
      return;
    }
  
    // Check if all fields are populated
    if (name && ingredients && instructions && category && prepTime && servings && cookTime && imageUrl) {
      try {
        const currentDate = getDate();
        const userId = localStorage.getItem('userId'); // Fetch user ID from local storage
        
        if (!userId) {
          toast.error('User ID not found. Please log in.');
          return;
        }
  
        const updatedRecipeData = { ...formValue, date: currentDate, userId }; // Include userId
  
        const response = await axios.post('http://localhost:2000/recipes', updatedRecipeData);
  
        if (response.status === 201) {
          toast.success('Recipe created Successfully');
          setformValue(initialState); // Reset form
          navigate('/home'); // Navigate to home
        } else {
          toast.error('Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred. Please try again.');
      }
    }
  };
  
  const onInputChange = (e) =>{
    let { name, value } = e.target;
    setformValue({...formValue, [name]: value});
  };

  const onCategoryChange = (e) =>{
    setCategoryErrMessage(null);
    setformValue({...formValue, category: e.target.value})
  }

  const onUploadImage = (file) =>{
    console.log('file', file);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'n1h365s9');
    axios.post('https://api.cloudinary.com/v1_1/dmpmbgngu/image/upload', formData).then((res)=> {
      toast.info('Image Uploaded Successfully');
      setformValue({...formValue, imageUrl:res.data.url})
    }).catch((err) =>{
      toast.error('Something went wrong')
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5 p-4 shadow-lg rounded bg-light">
      <h2 className="mb-4 text-center">Add New Recipe</h2>
      <hr />

     
      <div className="form-group mt-4 mb-3 col-8">
        <label htmlFor="recipeName" className="form-label">Recipe Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="name" 
          value={name || ''}
          name='name'
          onChange={onInputChange}
          placeholder="Enter recipe name" 
          required
        />
      </div>

      
      <div className="form-group mb-3">
        <label htmlFor="ingredients" className="form-label">Ingredients</label>
        <textarea 
          className="form-control"  
          id="ingredients" 
          rows="4" 
          value={ingredients || ''}
          name='ingredients'
          onChange={onInputChange}
          placeholder="List ingredients here"
          required
          >
        </textarea>
      </div>

      
      <div className="form-group mb-3">
        <label htmlFor="instructions" className="form-label">Instructions</label>
        <textarea 
          className="form-control" 
          id="instructions" 
          rows="4" 
          value={instructions || ''}
          name='instructions'
          onChange={onInputChange}
          placeholder="Describe the steps"
          required
          >
        </textarea>
      </div>

      
      <div className="row mb-3">
        <div className="col form-group">
          <label htmlFor="category" className="form-label">Category</label>
          <select className="form-control" id="category" onChange={onCategoryChange} value={category}>
          <option value="">Select Category</option>
            {options.map((option, index) => (
              <option key={index} value={option || ""}>{option}</option>
            ))}
          </select>
          {categoryErrMessage && (
            <div className='categoryErr'>{categoryErrMessage}</div>
          )}
        </div>

        <div className="col form-group">
          <label htmlFor="prepTime" className="form-label">Preparation Time (minutes)</label>
          <input 
            type="number" 
            className="form-control" 
            id="prepTime" 
            value={prepTime || ''}
            name='prepTime'
            onChange={onInputChange}
            placeholder="e.g., 15" 
            required
          />
        </div>
      </div>

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
            value={servings || ''}
            name='servings'
            onChange={onInputChange}
            placeholder="e.g., 4" 
            required
          />
        </div>
      </div>

      
      <div className="form-group mb-3">
        <label htmlFor="recipeImage" className="form-label">Upload Image</label>
        <input 
          type="file" 
          name="imageUrl"
          className="form-control" 
          onChange={(e) => onUploadImage(e.target.files[0])}
          id="image" 
          required
        />
      </div>

     
      <div className="text-center">
        <button type="submit" className="btn mt-3" style={{ backgroundColor: '#9A616D', color: 'white', fontSize: '18px' }}>Add Recipe</button>
      </div>
    </form>
  );
}

export default AddEditRecipe;
