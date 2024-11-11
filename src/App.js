// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AddEditRecipe from './pages/AddEditRecipe';
import MyRecipes from './pages/MyRecipes';
import Recipe from './pages/Recipe';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom layout component to conditionally render Header
const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderPaths = ['/login', '/register', '/add-recipe', '*', 'recipe'];

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      {children}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-recipe" element={<AddEditRecipe />} />
          <Route path="/edit/:id" element={<AddEditRecipe />} />
          <Route path="/my-recipe" element={<MyRecipes />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
