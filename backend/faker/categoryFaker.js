const chance = require('chance').Chance();
const Category = require('../models/Category');

const categoryFaker = async (count) => {
  const categories = [];
  for (let i = 0; i < count; i++) {
    categories.push({
      name: chance.string({
        length: chance.integer({ min: 5, max: 15 }),
      }),
      description: chance.paragraph(),
    });
  }
  await Category.insertMany(categories);
};

module.exports = categoryFaker;
