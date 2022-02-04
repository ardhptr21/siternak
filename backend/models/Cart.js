const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  _userId: {
    type: mongoose.Types.ObjectId,
    unique: true,
    required: true,
  },
  carts: {
    type: [
      {
        _productId: {
          type: mongoose.Types.ObjectId,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model('Cart', cartSchema);
