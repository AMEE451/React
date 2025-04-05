
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, deleteRecipe, searchRecipes } from '../redux/actions/recipeActions';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.filteredRecipes);
  const searchTerm = useSelector((state) => state.searchTerm);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteRecipe(id));
  };

  const handleSearch = (e) => {
    dispatch(searchRecipes(e.target.value));
  };

  return (
    <div>
      <h2>Recipe List</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by title"
        className="form-control mb-3"
      />
     <ul className="list-group">
  {recipes.map((recipe) => (
    <li key={recipe.id} className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
      
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '15px' }}
        />
        
        <div>
        
          <h5>{recipe.name}</h5>
          <p>Price: ${recipe.price}</p>
        </div>
      </div>

      <div>
      
        <Link to={`/edit-recipe/${recipe.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
        <button onClick={() => handleDelete(recipe.id)} className="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
};

export default RecipeList;
