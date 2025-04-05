
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/add-recipe" element={<RecipeForm />} />
          <Route path="/edit-recipe/:recipeId" element={<RecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
