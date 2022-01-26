const mongoose = require('mongoose');

const initiateMongoose = (callback) => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(callback)
    .catch((err) => {
      console.log('Some error occured when connected to database');
      console.log(err);
    });
};

module.exports = initiateMongoose;
