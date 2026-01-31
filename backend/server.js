import express from 'express';
import dotenv from 'dotenv';
import recipeRoutes from './routes/recipe.js';
import connectDb from './config/connectionDb.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDb();

// set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send('Hello World! changed');
});

app.use('/recipe', recipeRoutes);

app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Example app listening on port ${port}`);
});
