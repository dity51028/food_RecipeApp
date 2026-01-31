import Recipes from '../models/recipe';


const getRecipes =async (req,res)=>{
    const recipe = await Recipes.find()
    return res.json(recipe)
}

const getRecipeById = async (req,res)=>{
    const recipe = await Recipes.findById(req.params.id)
    return res.json(recipe)
}

const addRecipe = async (req,res)=>{
    const {title, ingredients, instructions, time, coverImage} = req.body;

    if(!title || !ingredients || !instructions ){
        return res.status(400).json({message:'required fields cannot be empty'})

    }
    const newRecipe = await Recipe.create({title, ingredients, instructions, time, coverImage})
    return res.json(newRecipe)

}

const updateRecipe = async (req,res)=>{
    const {title, ingredients, instructions, time, coverImage} = req.body;
    const recipe = await Recipes.findById(req.params.id)
    try {
        if(recipe){
            await recipe.findByIdAndUpdate(req.params.id, {title, ingredients, instructions, time, coverImage})
            return res.json({title, ingredients, instructions, time, coverImage})
        }
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
    
}

const deleteRecipe = (req,res)=>{
    res.json({message:'hello from recipe controller'})
}

export {getRecipes, getRecipeById, addRecipe, updateRecipe, deleteRecipe};
