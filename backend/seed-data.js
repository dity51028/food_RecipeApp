import fetch from 'node-fetch';

const API_BASE_URL = 'http://localhost:3001';

const dummyRecipes = [
  {
    title: "Classic Spaghetti Carbonara",
    ingredients: "400g spaghetti, 200g pancetta or guanciale, 4 large eggs, 100g Pecorino Romano cheese, black pepper, salt",
    instruction: "1. Cook spaghetti according to package directions. 2. Meanwhile, crisp pancetta in a large skillet. 3. Beat eggs with grated cheese and pepper. 4. Drain pasta, reserve 1 cup pasta water. 5. Toss hot pasta with pancetta, then egg mixture, adding pasta water to create creamy sauce. 6. Serve immediately with extra cheese and pepper.",
    time: "25 minutes",
    coverImage: "https://images.unsplash.com/photo-1612874742237-652622088e97?w=400"
  },
  {
    title: "Chicken Tikka Masala",
    ingredients: "500g chicken breast, 1 cup yogurt, 2 tbsp tikka masala spice, 1 onion, 3 garlic cloves, 1 can crushed tomatoes, 1 cup heavy cream, rice for serving",
    instruction: "1. Marinate chicken in yogurt and tikka spice for 30 minutes. 2. Grill or pan-fry chicken until cooked. 3. Sauté onion and garlic, add tomatoes and cream. 4. Simmer sauce, add chicken pieces. 5. Serve over basmati rice with naan bread.",
    time: "45 minutes",
    coverImage: "https://images.unsplash.com/photo-1565557623262-b51c2513a93e?w=400"
  },
  {
    title: "Fresh Garden Salad",
    ingredients: "Mixed lettuce leaves, 2 tomatoes, 1 cucumber, 1 red onion, feta cheese, olives, olive oil, lemon juice, oregano",
    instruction: "1. Wash and dry lettuce. 2. Slice tomatoes, cucumber, and onion. 3. Combine vegetables in a large bowl. 4. Crumble feta cheese over top. 5. Drizzle with olive oil and lemon juice. 6. Season with oregano, salt, and pepper. Toss well before serving.",
    time: "15 minutes",
    coverImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400"
  },
  {
    title: "Homemade Pizza Margherita",
    ingredients: "Pizza dough, 1 can tomato sauce, 250g fresh mozzarella, fresh basil leaves, olive oil, salt, pepper",
    instruction: "1. Preheat oven to 475°F (245°C). 2. Roll out pizza dough on floured surface. 3. Spread tomato sauce, leaving border for crust. 4. Tear mozzarella and distribute over sauce. 5. Bake for 12-15 minutes until crust is golden. 6. Top with fresh basil and drizzle with olive oil.",
    time: "30 minutes",
    coverImage: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400"
  },
  {
    title: "Beef Tacos",
    ingredients: "500g ground beef, 1 packet taco seasoning, 8 taco shells, lettuce, tomatoes, cheese, sour cream, salsa",
    instruction: "1. Brown ground beef in skillet over medium heat. 2. Add taco seasoning and water, simmer until thickened. 3. Warm taco shells according to package. 4. Fill shells with beef mixture. 5. Top with shredded lettuce, diced tomatoes, cheese, sour cream, and salsa.",
    time: "20 minutes",
    coverImage: "https://images.unsplash.com/photo-1551504734-5ee1c4a39fe4?w=400"
  },
  {
    title: "Chocolate Chip Cookies",
    ingredients: "2¼ cups flour, 1 tsp baking soda, 1 tsp salt, 1 cup butter, ¾ cup sugar, ¾ cup brown sugar, 2 eggs, 2 cups chocolate chips",
    instruction: "1. Preheat oven to 375°F (190°C). 2. Mix flour, baking soda, and salt. 3. Beat butter with sugars until creamy. 4. Beat in eggs one at a time. 5. Gradually blend in flour mixture. 6. Stir in chocolate chips. 7. Drop rounded tablespoons onto ungreased cookie sheets. 8. Bake 9-11 minutes until golden brown.",
    time: "25 minutes",
    coverImage: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400"
  },
  {
    title: "Greek Moussaka",
    ingredients: "2 eggplants, 500g ground lamb, 1 onion, 2 cans crushed tomatoes, béchamel sauce, Parmesan cheese, olive oil",
    instruction: "1. Slice eggplants, salt, and let drain for 30 minutes. 2. Brown lamb with onion, add tomatoes, simmer. 3. Fry eggplant slices until golden. 4. Layer eggplant and meat sauce in baking dish. 5. Top with béchamel sauce and cheese. 6. Bake at 350°F (175°C) for 45 minutes until golden.",
    time: "2 hours",
    coverImage: "https://images.unsplash.com/photo-1598515214211-89b3e52540e5?w=400"
  },
  {
    title: "Vegetable Stir Fry",
    ingredients: "Mixed vegetables (broccoli, carrots, bell peppers), 2 tbsp soy sauce, 1 tbsp sesame oil, 2 cloves garlic, 1 tsp ginger, rice",
    instruction: "1. Heat wok or large pan over high heat. 2. Add oil, then garlic and ginger. 3. Add harder vegetables first (carrots, broccoli). 4. Stir-fry for 3-4 minutes. 5. Add softer vegetables, stir-fry 2-3 minutes more. 6. Add soy sauce and sesame oil. 7. Serve over steamed rice.",
    time: "20 minutes",
    coverImage: "https://images.unsplash.com/photo-1512058564366-18560be4619b?w=400"
  }
];

const seedDatabase = async () => {
  console.log('Seeding database with dummy recipes...');
  
  for (const recipe of dummyRecipes) {
    try {
      const response = await fetch(`${API_BASE_URL}/recipe/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`✅ Added: ${recipe.title}`);
      } else {
        console.error(`❌ Failed to add: ${recipe.title}`);
      }
    } catch (error) {
      console.error(`❌ Error adding ${recipe.title}:`, error.message);
    }
  }
  
  console.log('🎉 Database seeding completed!');
};

// Run the seeding function
seedDatabase().catch(console.error);
