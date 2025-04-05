// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Middleware for async actions
import recipeReducer from './reducers/recipeReducer'; // Your reducer file

// Create the Redux store with the reducer and middleware
const store = createStore(recipeReducer, applyMiddleware(thunk));

// Export the store (make sure to use the correct variable name)
export default store;
