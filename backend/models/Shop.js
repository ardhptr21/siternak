const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

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
  account_number: {
    type: Number,
    required: [true, "Shop account number can't be empty"],
  },
  slug: {
    type: String,
  },
  image: {
    type: String,
  },
});

shopSchema.post('validate', (doc) => {
  doc.slug = doc.name.toLowerCase().replace(/\s/g, '-') + '-' + nanoid(6);
});

module.exports = mongoose.model('Shop', shopSchema);
