const { request, response } = require('express');
const ProofPayment = require('../models/ProofPayment');
const Transaction = require('../models/Transaction');
const Product = require('../models/Product');
const { Types } = require('mongoose');
const cloudinaryInstance = require('../configs/cloudinary.config');

/**
 * Get All ProofPayment
 *
 * @param {response} res
 */
exports.getAll = async (_, res) => {
  try {
    const proofPayments = await ProofPayment.find();

    if (!proofPayments) {
      return res.status(404).json({ status: 404, success: false, message: 'ProofPayment not found' });
    }

    res.status(200).json({ status: 200, success: true, data: proofPayments });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 * Get proof payment by transaction id
 *
 * @param {request} req
 * @param {response} res
 */
exports.getPaymentByTransactionId = async (req, res) => {
  const transaction_id = req.params.transaction_id;
  try {
    const proofPayment = await ProofPayment.findOne({ _transactionId: transaction_id });

    if (!proofPayment) {
      return res.status(404).json({ status: 404, success: false, message: 'ProofPayment not found' });
    }

    res.status(200).json({ status: 200, success: true, data: proofPayment });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 * Get proof payment by id
 *
 * @param {request} req
 * @param {response} res
 */
exports.getPaymentById = async (req, res) => {
  const id = req.params.id;
  try {
    const proofPayment = await ProofPayment.findById(id);

    if (!proofPayment) {
      return res.status(404).json({ status: 404, success: false, message: 'ProofPayment not found' });
    }

    res.status(200).json({ status: 200, success: true, data: proofPayment });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 * Add new proof payment
 *
 * @param {request} req
 * @param {response} res
 */
exports.addPayment = async (req, res) => {
  const { transaction_id } = req.body;

  const _id = Types.ObjectId();

  try {
    let result = null;
    if (req.file) {
      result = await cloudinaryInstance.uploader.upload(req.file.path, {
        public_id: `${_id}_photo`,
        folder: 'siternak/proof_payment',
      });
    }

    const proofPayment = await ProofPayment.create({
      _id,
      _transactionId: transaction_id,
      image: result?.secure_url ?? '',
    });

    const transaction = await Transaction.findByIdAndUpdate(
      transaction_id,
      { status: 1 },
      { new: true, runValidators: true }
    );

    await Product.findByIdAndUpdate(
      transaction._productId,
      {
        $inc: { total_sold: transaction.quantity, stock: -transaction.quantity },
      },
      { runValidators: true }
    );
    res.status(201).json({ status: 201, success: true, data: proofPayment });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};
