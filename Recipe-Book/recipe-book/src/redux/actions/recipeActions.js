
export const fetchRecipes = () => async (dispatch) => {
    const response = await fetch('http://localhost:3000/recipes');
    const recipes = await response.json();
    dispatch({ type: 'FETCH_RECIPES', payload: recipes });
  };
  
  export const addRecipe = (recipe) => async (dispatch) => {
    const response = await fetch('http://localhost:3000/recipes', {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: { 'Content-Type': 'application/json' },
    });
    const newRecipe = await response.json();
    dispatch({ type: 'ADD_RECIPE', payload: newRecipe });
  };
  
  export const updateRecipe = (id, updatedRecipe) => async (dispatch) => {
    const response = await fetch(`http://localhost:3000/recipes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedRecipe),
      headers: { 'Content-Type': 'application/json' },
    });
    const updated = await response.json();
    dispatch({ type: 'UPDATE_RECIPE', payload: updated });
  };
  
  export const deleteRecipe = (id) => async (dispatch) => {
    await fetch(`http://localhost:3000/recipes/${id}`, { method: 'DELETE' });
    dispatch({ type: 'DELETE_RECIPE', payload: id });
  };
  
  export const searchRecipes = (searchTerm) => ({
    type: 'SEARCH_RECIPES',
    payload: searchTerm,
  });
  