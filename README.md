# Food Recipe Backend API

A RESTful API backend for managing food recipes built with Node.js, Express.js, and MongoDB.

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, and Delete recipes
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **RESTful API**: Clean and standard HTTP endpoints
- **Input Validation**: Required field validation for recipe creation
- **Error Handling**: Proper error responses and status codes
- **ES6 Modules**: Modern JavaScript syntax

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd food_recipe
   ```

2. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/food_recipe
   ```

4. **Start the server**
   ```bash
   # For development
   npm run dev
   
   # For production
   npm start
   ```

The server will start on `http://localhost:3000`

## 📚 API Endpoints

### Recipes

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/recipe` | Get all recipes | - |
| GET | `/recipe/:id` | Get a specific recipe by ID | - |
| POST | `/recipe/add` | Create a new recipe | Recipe object |
| PUT | `/recipe/:id` | Update a recipe by ID | Updated recipe object |
| DELETE | `/recipe/:id` | Delete a recipe by ID | - |

### Recipe Model

```json
{
  "title": "string (required)",
  "ingredients": "string (required)",
  "instruction": "string (required)",
  "time": "string (optional)",
  "coverImage": "string (optional)"
}
```

## 📖 Usage Examples

### Get All Recipes
```bash
curl -X GET http://localhost:3000/recipe
```

### Get Recipe by ID
```bash
curl -X GET http://localhost:3000/recipe/507f1f77bcf86cd799439011
```

### Create New Recipe
```bash
curl -X POST http://localhost:3000/recipe/add \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Spaghetti Carbonara",
    "ingredients": "Pasta, Eggs, Bacon, Parmesan, Black Pepper",
    "instruction": "Cook pasta, fry bacon, mix eggs and cheese, combine all",
    "time": "30 minutes",
    "coverImage": "https://example.com/carbonara.jpg"
  }'
```

### Update Recipe
```bash
curl -X PUT http://localhost:3000/recipe/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Spaghetti Carbonara",
    "ingredients": "Pasta, Eggs, Bacon, Parmesan, Black Pepper, Salt",
    "instruction": "Cook pasta al dente, fry crispy bacon, mix eggs and cheese, combine all with seasoning",
    "time": "25 minutes"
  }'
```

### Delete Recipe
```bash
curl -X DELETE http://localhost:3000/recipe/507f1f77bcf86cd799439011
```

## 📁 Project Structure

```
food_recipe/
├── backend/
│   ├── config/
│   │   └── connectionDb.js    # MongoDB connection configuration
│   ├── controller/
│   │   └── recipe.js          # Recipe controller logic
│   ├── models/
│   │   └── recipe.js          # Recipe schema and model
│   ├── routes/
│   │   └── recipe.js          # Recipe routes
│   ├── views/
│   │   └── recipe.ejs         # EJS template (if needed)
│   ├── .env                   # Environment variables
│   ├── package.json           # Dependencies and scripts
│   └── server.js              # Main server file
├── frontend/                  # Frontend application (if exists)
└── README.md                  # This file
```

## 🔧 Dependencies

- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling tool
- **dotenv**: Environment variable management
- **nodemon**: Development utility that auto-restarts server

## 🐛 Error Handling

The API returns appropriate HTTP status codes:

- `200`: Success
- `400`: Bad Request (missing required fields)
- `404`: Not Found (recipe not found)
- `500`: Internal Server Error

Error response format:
```json
{
  "message": "Error description"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Contact

For any questions or suggestions, please open an issue in the repository.
