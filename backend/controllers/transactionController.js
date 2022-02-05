const { request, response } = require('express');
const Transaction = require('../models/Transaction');

/**
 * Get the transactions
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.getAll = async (req, res) => {
  try {
    const transactions = await Transaction.find();
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
  const { product_id: _productId, shop_id: _shopId, buyer_id: _buyerId, quantity, total_price } = req.body;

  try {
    const transaction = await Transaction.create({ _productId, _shopId, _buyerId, quantity, total_price });
    return res.status(201).json({ status: 201, success: true, data: transaction });
  } catch (err) {
    return res.status(409).json({ status: 409, success: false, message: err.message });
  }
};
