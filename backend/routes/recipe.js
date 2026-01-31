import express from 'express';
const router = express.Router();
import {getRecipes, getRecipeById, addRecipe, updateRecipe, deleteRecipe} from '../controller/recipe.js';

router.get('/', getRecipes);  //get all recipes 
router.get('/:id', getRecipeById);  //get recipe by id
router.post('/add', addRecipe);  //add recipe
router.put('/:id', updateRecipe);  //update recipe
router.delete('/:id', deleteRecipe);  //delete recipe

export default router;