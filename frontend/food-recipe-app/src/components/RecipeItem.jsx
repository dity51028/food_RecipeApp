import React from 'react'

const RecipeItem = () =>{
    const allRecipes = useLoaderData()
    console.log(allRecipes);
    
    return(
        <div>
            <h2>Recipe Item</h2>
        </div>
    )
}

export default RecipeItem