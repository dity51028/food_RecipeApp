import React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import MainNav from './components/MainNav'
import axios from 'axios'

const GetAllRecipe = async() =>{
  try {
    console.log('Fetching recipes from backend...');
    const response = await axios.get('http://localhost:3001/recipe');
    console.log('Recipes fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw new Error('Failed to fetch recipes');
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainNav />,
    errorElement: <div>Error loading page. Please try again.</div>,
    children : [
      {
        path: '/',
        element: <Home />,
        loader: GetAllRecipe,
        errorElement: <div>Error loading recipes. Please check your backend connection.</div>
      }
    ]

  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
      

  )
}

export default App
