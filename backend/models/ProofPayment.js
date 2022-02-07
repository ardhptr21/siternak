const mongoose = require('mongoose');

const proofPaymentSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  _transactionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Transaction is required'],
    unique: true,
  },
});

module.exports = mongoose.model('ProofPayment', proofPaymentSchema);
