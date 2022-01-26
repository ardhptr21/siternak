const chance = require('chance').Chance();
const User = require('../models/User');
const bcrypt = require('bcrypt');

const userFaker = async (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    const password = await bcrypt.hash('password', 10);
    users.push({
      name: chance.name(),
      username: chance.name().replace(/\s/g, '').toLowerCase(),
      telephone: chance.phone({ formatted: false }),
      address: {
        province: chance.province(),
        city: chance.city(),
        district: chance.city(),
        detail: chance.address(),
      },
      photo: chance.avatar({ protocol: 'https' }),
      email: chance.email(),
      password,
    });
  }
  await User.insertMany(users);
};

module.exports = userFaker;
