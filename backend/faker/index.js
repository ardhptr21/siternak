const userFaker = require('./userFaker');
const categoryFaker = require('./categoryFaker');
const productFaker = require('./productFaker');
const initiateMongoose = require('../configs/mongoose.config');
const dotenv = require('dotenv');

dotenv.config();
initiateMongoose(() => console.log('Mongoose Initiated!'));

(async () => {
  const argv = process.argv.slice(2);
  const arguments = { user: 0, category: 0, product: 0 };

  argv.forEach((arg) => {
    const [key, value] = arg.split('=');
    arguments[key] = +value;
  });

  await userFaker(arguments.user);
  await categoryFaker(arguments.category);
  await productFaker(arguments.product);

  console.log('Done!');
  process.exit(0);
})();
