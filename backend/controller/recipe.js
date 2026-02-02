import Recipes from '../models/recipe.js';


const getRecipes =async (req,res)=>{
    const recipe = await Recipes.find()
    return res.json(recipe)
}

const getRecipeById = async (req,res)=>{
    const recipe = await Recipes.findById(req.params.id)
    return res.json(recipe)
}

const addRecipe = async (req,res)=>{
    console.log('Request body:', req.body);
    console.log('Content-Type:', req.get('Content-Type'));
    
    const {title, ingredients, instruction, time, coverImage} = req.body;

    console.log('Extracted fields:', {title, ingredients, instruction, time, coverImage});

    if(!title || !ingredients || !instruction ){
        return res.status(400).json({message:'required fields cannot be empty', received: {title, ingredients, instruction}})

    }
    const newRecipe = await Recipes.create({title, ingredients, instruction, time, coverImage})
    return res.json(newRecipe)

}

const updateRecipe = async (req,res)=>{
    const {title, ingredients, instruction, time, coverImage} = req.body;
    const recipe = await Recipes.findById(req.params.id)
    try {
        if(recipe){
            await recipe.findByIdAndUpdate(req.params.id, {title, ingredients, instruction, time, coverImage})
            return res.json({title, ingredients, instruction, time, coverImage})
        }
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
    
}

const deleteRecipe = async (req,res)=>{
    try {
        const recipe = await Recipes.findByIdAndDelete(req.params.id)
        if(!recipe){
            return res.status(404).json({message:'Recipe not found'})
        }
        return res.json({message:'Recipe deleted successfully', recipe})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export {getRecipes, getRecipeById, addRecipe, updateRecipe, deleteRecipe};
