const chance = require('chance').Chance();
const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');

const productFaker = async (count) => {
  const users = await User.find({}, '_id');
  const categories = await Category.find({}, '_id');

  const products = [];
  for (let i = 0; i < count; i++) {
    const _userId = chance.pickone(users)._id;
    const _categoryId = chance.pickone(categories)._id;

    products.push({
      _userId,
      _categoryId,
      name: chance.string({
        length: chance.integer({ min: 5, max: 15 }),
      }),
      price: chance.integer({ min: 10000, max: 3000000 }),
      description: chance.paragraph(),
      stock: chance.integer({ min: 5, max: 150 }),
      image: chance.avatar({ protocol: 'https' }),
    });
  }
  await Product.insertMany(products);
};

module.exports = productFaker;
