import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe, updateRecipe } from '../redux/actions/recipeActions';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeForm = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // If editing, find the current recipe
  const recipe = useSelector((state) =>
    state.recipes.find((r) => r.id === parseInt(recipeId))
  );

  // State for the new or edited recipe
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  // If we're editing, populate the form with the current recipe's data
  useEffect(() => {
    if (recipeId && recipe) {
      setName(recipe.name);
      setPrice(recipe.price);
      setImage(recipe.image);
    }
  }, [recipeId, recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = { name, price, image };

    if (recipeId) {
      dispatch(updateRecipe(recipeId, newRecipe));  // Update recipe
    } else {
      dispatch(addRecipe(newRecipe));  // Add new recipe
    }

    navigate('/recipes');
  };

  return (
    <div className="container">
      <h2>{recipeId ? 'Edit Recipe' : 'Add New Recipe'}</h2>
      <form onSubmit={handleSubmit}>
        {/* Recipe Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Recipe Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Recipe Name"
            required
          />
        </div>

        {/* Recipe Price */}
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
          />
        </div>

        {/* Recipe Image */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {recipeId ? 'Update Recipe' : 'Add Recipe'}
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;

