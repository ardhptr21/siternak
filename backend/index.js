/**--------------------------------------------
 *               REQUIRE MODULE
 *---------------------------------------------**/
const express = require('express');
const cors = require('cors');
const initiateMongoose = require('./configs/mongoose.config');

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
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**--------------------------------------------
 *               ROUTES
 *---------------------------------------------**/
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const categoryRoutes = require('./routes/category.routes');
const shopRoutes = require('./routes/shop.routes');
const transactionRoutes = require('./routes/transaction.routes');
const cartRoutes = require('./routes/cart.routes');
const proofPaymentRoutes = require('./routes/proofPayment.routes');

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/transaction', transactionRoutes);
app.use('/shops', shopRoutes);
app.use('/auth', authRoutes);
app.use('/cart', cartRoutes);
app.use('/proof-payment', proofPaymentRoutes);

app.get('/', (_, res) => {
  res.send('Hello World, Welcome to Siternak API');
});

/**--------------------------------------------
 *               CONNECT DB AND LISTENING
 *---------------------------------------------**/
initiateMongoose(() => {
  app.listen(PORT, console.log(`Server is running on port ${PORT} and connect to database\n`));
});
