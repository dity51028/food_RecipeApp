# Database Setup Guide

## 🚀 Quick Start

### 1. Start Your Backend Server
```bash
cd backend
node server.js
```
Server will run on `http://localhost:3001`

### 2. Populate Database with Dummy Data
```bash
cd backend
node seed-data.js
```

### 3. Verify Data
```powershell
Invoke-RestMethod -Uri "http://localhost:3001/recipe" -Method GET
```

## 📋 Available Recipes After Seeding

| Recipe | Cuisine | Time | Difficulty |
|--------|---------|------|------------|
| Classic Spaghetti Carbonara | Italian | 25 min | Easy |
| Chicken Tikka Masala | Indian | 45 min | Medium |
| Fresh Garden Salad | Healthy | 15 min | Easy |
| Homemade Pizza Margherita | Italian | 30 min | Medium |
| Beef Tacos | Mexican | 20 min | Easy |
| Chocolate Chip Cookies | Dessert | 25 min | Easy |
| Greek Moussaka | Mediterranean | 2 hours | Hard |
| Vegetable Stir Fry | Asian | 20 min | Easy |

## 🔧 API Commands

### Get All Recipes
```powershell
Invoke-RestMethod -Uri "http://localhost:3001/recipe" -Method GET
```

### Get Recipe by ID
```powershell
Invoke-RestMethod -Uri "http://localhost:3001/recipe/YOUR_RECIPE_ID" -Method GET
```

### Add New Recipe
```powershell
Invoke-RestMethod -Uri "http://localhost:3001/recipe/add" -Method POST -Body '{"title":"Your Recipe","ingredients":"ingredients list","instruction":"cooking instructions"}' -ContentType "application/json"
```

### Update Recipe
```powershell
Invoke-RestMethod -Uri "http://localhost:3001/recipe/YOUR_RECIPE_ID" -Method PUT -Body '{"title":"Updated Title"}' -ContentType "application/json"
```

### Delete Recipe
```powershell
Invoke-RestMethod -Uri "http://localhost:3001/recipe/YOUR_RECIPE_ID" -Method DELETE
```

## 📁 File Structure

```
backend/
├── seed-data.js          # Script to populate database
├── server.js             # Main server file
├── package.json          # Dependencies
└── .env                  # Environment variables
```

## 🛠️ Dependencies Required

Make sure you have these installed:
```bash
npm install express mongoose dotenv node-fetch
```

## 🔐 Environment Variables

Create `.env` file in backend folder:
```env
PORT=3001
CONNECTION_STRING=mongodb://localhost:27017/food_recipe
```

## 📊 Database Schema

Each recipe contains:
- `_id` (auto-generated)
- `title` (required)
- `ingredients` (required)
- `instruction` (required)
- `time` (optional)
- `coverImage` (optional)
- `createdAt` (auto-generated)
- `updatedAt` (auto-generated)

## 🎯 Sample Recipe Data

The seed script adds 8 diverse recipes covering:
- Italian cuisine (Pasta, Pizza)
- Asian cuisine (Stir Fry)
- Indian cuisine (Tikka Masala)
- Mexican cuisine (Tacos)
- Mediterranean cuisine (Moussaka)
- Healthy options (Salad)
- Desserts (Cookies)

Each recipe includes:
- Realistic ingredients lists
- Step-by-step instructions
- Cooking times
- High-quality cover images from Unsplash

## 🔄 Reset Database

To clear and repopulate database:
1. Stop server
2. Clear MongoDB collection (optional)
3. Run seed script again
4. Restart server

## 🚨 Troubleshooting

**Server not running?**
- Check if port 3001 is available
- Ensure MongoDB is running
- Check `.env` file configuration

**Seed script fails?**
- Make sure server is running on port 3001
- Check internet connection for image URLs
- Verify MongoDB connection

**API requests failing?**
- Check server is running
- Verify correct port (3001)
- Check JSON syntax in request body

## 📞 Quick Reference

**Server URL:** `http://localhost:3001`
**Database:** `food_recipe`
**Collection:** `recipes`
**Total Dummy Recipes:** 8

Your database is ready for development! 🎉
