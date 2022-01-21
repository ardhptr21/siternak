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
