const { request, response } = require('express');
const Product = require('../models/Product');

/**
 * Get all products in the database
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ status: 200, success: true, data: products });
  } catch (error) {
    res.status(500).json({ status: 500, success: false, message: error.message });
  }
};

/**
 * Create a new product
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.create = async (req, res) => {
  const { user_id, name, price, description, stock, image } = req.body;

  try {
    const product = await Product.create({ _userId: user_id, name, price, description, stock, image });
    res.status(201).json({ status: 201, success: true, data: product });
  } catch (err) {
    res.status(409).json({ status: 409, success: false, message: err.message });
  }
};

/**
 * Delete a product
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.delete = async (req, res) => {
  const product_id = req.params.product_id;

  try {
    await Product.findByIdAndDelete(product_id);
    res.status(200).json({ status: 200, success: true, message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};
