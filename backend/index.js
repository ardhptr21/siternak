/**--------------------------------------------
 *               REQUIRE MODULE
 *---------------------------------------------**/
const express = require('express');
const mongoose = require('mongoose');

// INITIALIZE EXPRESS
const app = express();
const PORT = process.env.PORT || 8000;

// SETUP DEVELOPMENT CONFIGURATION
if (process.env.NODE_ENV !== 'production') {
  app.use(require('morgan')('dev'));
  require('dotenv').config();
}

/**--------------------------------------------
 *               MIDDLEWARES
 *---------------------------------------------**/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**--------------------------------------------
 *               ROUTES
 *---------------------------------------------**/
app.get('/', (req, res) => {
  res.send('Hello World, Welcome to Siternak API');
});

/**--------------------------------------------
 *               CONNECT DB AND LISTENING
 *---------------------------------------------**/
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT} and connect to database\n`));
  })
  .catch((err) => {
    console.log('Server not running because of error when connected to database');
    console.log(err);
  });
