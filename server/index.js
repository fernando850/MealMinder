require('dotenv').config({ path: './src/config/.env' }); //loading environment variables

console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_DATABASE:', process.env.DB_DATABASE);


const express = require('express');
const sequelize = require('./src/config/db.js');
const User = require('./src/models/user.js');
const Meal = require('./src/models/meal.js');
const Weight = require('./src/models/weight.js');
const MealDetail = require('./src/models/mealDetail.js');

const app = express();
const hostname = 'localhost';
const port = 3001; 

app.use(express.json());

// Routes Placeholder
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Test the database connection before starting the server
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');

    // Once connection is successful, start the server
    app.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });


