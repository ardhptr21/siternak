const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  status: {
    type: Number,
    required: true,
    default: 0,
  },
  type: {
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
  _sellerId: {
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
});
