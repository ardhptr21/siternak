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
      required: [true, "Slug can't be empty"],
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

productSchema.pre('save', (next) => {
  this.slug = this.name.replace(/\s+/g, '-').toLowerCase() + '-' + nanoid();
  next();
});

module.exports = mongoose.model('Product', productSchema);
