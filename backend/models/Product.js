const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const productSchema = new mongoose.Schema(
  {
    _userId: {
      type: mongoose.Types.ObjectId,
      required: [true, "User ID can't be empty"],
    },
    name: {
      type: String,
      required: [true, "Name can't be empty"],
    },
    slug: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Price can't be empty"],
    },
    description: {
      type: String,
      required: [true, "Description can't be empty"],
    },
    stock: {
      type: Number,
      required: [true, "Stock can't be empty"],
    },
    image: {
      type: String,
      required: [true, "Image can't be empty"],
    },
  },
  {
    timestamps: true,
  }
);

productSchema.post('validate', (doc) => {
  doc.slug = doc.name.toLowerCase().replace(/\s/g, '-') + '-' + nanoid(6);
});

module.exports = mongoose.model('Product', productSchema);
