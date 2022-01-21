const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Shop name can't be empty"],
  },
  description: {
    type: String,
    required: [true, "Shop description can't be empty"],
  },
  slug: {
    type: String,
    required: [true, "Shop slug can't be empty"],
  },
});

module.exports = mongoose.model('Shop', shopSchema);
