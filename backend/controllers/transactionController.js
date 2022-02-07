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

/**
 * Get Item Only Buyer by Id
 *
 * @param {request} req
 * @param {response} res
 * @returns
 */
module.exports.getBuyerById = async (req, res) => {
  const buyer_id = req.params.buyer_id;

  try {
    const transaction = await Transaction.find({ _buyerId: buyer_id });
    return res.status(200).json({ status: 200, success: true, data: transaction });
  } catch (err) {
    return res.status(409).json({ status: 409, success: false, message: err.message });
  }
};

/**
 * Get Item Only Seller (shop) by Id
 *
 * @param {request} req
 * @param {response} res
 * @returns
 */
module.exports.getSellerById = async (req, res) => {
  const shop_id = req.params.shop_id;

  try {
    const transaction = await Transaction.find({ _shopId: shop_id });
    return res.status(200).json({ status: 200, success: true, data: transaction });
  } catch (err) {
    return res.status(409).json({ status: 409, success: false, message: err.message });
  }
};

/**
 * Change status of transaction from DIKIRIM to SELESAI / DIBATALKAN
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.changeStatus = async (req, res) => {
  const transaction_id = req.params.id;
  const { status } = req.body;

  if (![3, 4, 5].includes(status)) {
    return res.status(400).json({ status: 400, success: false, message: 'Status you provide is not valid' });
  }

  try {
    const transaction = await Transaction.findByIdAndUpdate(
      transaction_id,
      { status },
      { new: true, runValidators: true }
    );
    return res.status(200).json({ status: 200, success: true, data: transaction });
  } catch (err) {
    return res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 * Change status to SELESAI DIREVIEW, only can change by superadmin
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.reviewDone = async (req, res) => {
  const transaction_id = req.params.id;

  try {
    const transaction = await Transaction.findByIdAndUpdate(
      transaction_id,
      { status: 2 },
      { new: true, runValidators: true }
    );
    return res.status(200).json({ status: 200, success: true, data: transaction });
  } catch (err) {
    return res.status(500).json({ status: 500, success: false, message: err.message });
  }
};
