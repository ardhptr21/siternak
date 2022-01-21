const mongoose = require('mongoose');
const nanoid = require('nanoid');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name can't be empty"],
  },
  description: {
    type: String,
    required: [true, "Description can't be empty"],
  },
  slug: {
    type: String,
  },
});

categorySchema.post('validate', (doc) => {
  doc.slug = doc.name.toLowerCase().replace(/\s/g, '-') + nanoid(6);
});

module.exports = mongoose.model('Category', categorySchema);
