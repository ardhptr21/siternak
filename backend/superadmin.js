const initiateMongoose = require('./configs/mongoose.config');
const readline = require('readline');
const User = require('./models/User');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
initiateMongoose();

console.log('Superadmin Creation\n');

rl.question('Email\t\t: ', (email) => {
  rl.question('Name\t\t: ', (name) => {
    rl.question('Password\t: ', (password) => {
      User.create(
        {
          email,
          name,
          password,
          username: name.replace(/\s/, '').toLowerCase(),
          telephone: '0123456789',
          address: {
            province: 'empty',
            city: 'empty',
            district: 'empty',
            detail: 'empty',
          },
          role: 3,
        },
        () => {
          console.log('\nCreate superadmin success!');
          rl.close();
          process.exit(0);
        }
      );
    });
  });
});
