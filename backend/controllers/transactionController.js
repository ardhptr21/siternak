const { request, response } = require('express');
const Transaction = require('../models/Transaction');
const { decode } = require('jsonwebtoken');

/**
 * Get the transactions of seller
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.getSeller = async (req, res) => {
  const TOKEN = req.header('Authorization');
  const decoded = decode(TOKEN);

  try {
    const transactions = await Transaction.find({
      _sellerId: decoded.userId,
      type: 1,
    });

    return res.status(200).json({ status: 200, success: true, data: transactions });
  } catch (err) {
    return res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 * Get the transactions of buyer
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.getBuyer = async (req, res) => {
  const TOKEN = req.header('Authorization');
  const decoded = decode(TOKEN);

  try {
    const transactions = await Transaction.find({
      _buyerId: decoded.userId,
      type: 0,
    });

    return res.status(200).json({ status: 200, success: true, data: transactions });
  } catch (err) {
    return res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 * Create new transaction
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.create = async (req, res) => {
  const { product_id: _productId, seller_id: _sellerId, buyer_id: _buyerId, quantity, total_price } = req.body;

  try {
    const transaction = await Transaction.create({ _productId, _sellerId, _buyerId, quantity, total_price });
    return res.status(201).json({ status: 201, success: true, data: transaction });
  } catch (err) {
    return res.status(409).json({ status: 409, success: false, message: err.message });
  }
};
