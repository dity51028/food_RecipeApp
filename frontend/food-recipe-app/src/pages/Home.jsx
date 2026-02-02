import React from 'react'
import { useLoaderData } from 'react-router-dom'
import food from '../assets/rice.jpg'
import RecipeItem from '../components/RecipeItem'

const Home = () => {
  const allRecipes = useLoaderData()
  console.log(allRecipes);

  return (
    <>
      <section className="home">
        <div className="left">
          <h1>Food Recipe</h1>
          <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium blanditiis consequatur repellendus vel voluptatem ad 
            corrupti officiis similique, neque itaque atque odio earum error sint. Impedit, optio et? Repellendus, tempore!</h5>
          <button>Share your recipe</button>
        </div>

        <div className="right">
          <img src={food} alt="Food"  />
        </div>

      </section>

      <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,128L21.8,149.3C43.6,171,87,213,131,197.3C174.5,181,218,107,262,69.3C305.5,32,349,32,393,64C436.4,96,480,160,524,192C567.3,224,611,224,655,202.7C698.2,181,742,139,785,138.7C829.1,139,873,181,916,202.7C960,224,1004,224,1047,202.7C1090.9,181,1135,139,1178,144C1221.8,149,1265,203,1309,192C1352.7,181,1396,107,1418,69.3L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
      </div>

      <div className="recipe">
        <h2 className="title">All Recipes</h2>
        {allRecipes && allRecipes.length > 0 ? (
          <div className="card-container">
            {allRecipes.map((recipe) => (
              <RecipeItem key={recipe._id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <p>No recipes available</p>
        )}
      </div>
    </>
  )
}

export default Home