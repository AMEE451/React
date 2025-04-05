
const initialState = {
    recipes: [],
    filteredRecipes: [],
    searchTerm: '',
  };
  
  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RECIPES':
        return { ...state, recipes: action.payload, filteredRecipes: action.payload };
      case 'ADD_RECIPE':
        return {
          ...state,
          recipes: [...state.recipes, action.payload],
          filteredRecipes: [...state.filteredRecipes, action.payload],
        };
      case 'UPDATE_RECIPE':
        return {
          ...state,
          recipes: state.recipes.map((recipe) =>
            recipe.id === action.payload.id ? action.payload : recipe
          ),
          filteredRecipes: state.filteredRecipes.map((recipe) =>
            recipe.id === action.payload.id ? action.payload : recipe
          ),
        };
      case 'DELETE_RECIPE':
        return {
          ...state,
          recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
          filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== action.payload),
        };
      case 'SEARCH_RECIPES':
        return {
          ...state,
          searchTerm: action.payload,
          filteredRecipes: state.recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
      default:
        return state;
    }
  };
  
  export default recipeReducer;
  