const { request, response } = require('express');
const Shop = require('../models/Shop');

/**
 * Get All Shops
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.getAll = async (req, res) => {
  try {
    const shops = await Shop.find();
    res.status(200).json({ status: 200, success: true, data: shops });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 * Get Shop by slug name
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.getOne = async (req, res) => {
  const { slug } = req.params;
  try {
    const shop = await Shop.findOne({ slug: slug });

    if (!shop) {
      return res.status(404).json({ status: 404, success: false, message: 'Shop not found' });
    }

    res.status(200).json({ status: 200, success: true, data: shop });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 * Create new Shop
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.create = async (req, res) => {
  const { user_id, name, description } = req.body;

  try {
    const shop = await Shop.create({ _userId: user_id, name: name, description: description });
    res.status(201).json({ status: 201, success: true, data: shop });
  } catch (err) {
    res.status(409).json({ status: 409, success: false, message: err.message });
  }
};

/**
 * Delete Shop
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.delete = async (req, res) => {
  const user_id = req.params.id;

  try {
    await Shop.findByIdAndDelete(user_id);
    res.status(200).json({ status: 200, success: true, message: 'Shop deleted' });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};
