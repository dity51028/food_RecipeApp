import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    title:
    {
        type:String, 
        required:true
    },
    ingredients:
    {
        type:String,
        required:true
    },
    instruction:
    {
        type:String,
        required:true
    },
    time:
    {
        type:String,
        
    },
    coverImage:
    {
        type:String,
        
    }
    
},{timestamps:true })


export default mongoose.model('Recipe', recipeSchema);