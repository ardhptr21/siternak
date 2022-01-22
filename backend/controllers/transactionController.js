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
