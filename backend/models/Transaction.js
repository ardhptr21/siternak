const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    status: {
      type: Number,
      required: true,
      default: 0,
    },
    _productId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    _buyerId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    _shopId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Transaction', transactionSchema);
