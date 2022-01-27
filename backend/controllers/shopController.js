const { request, response } = require('express');
const { Types } = require('mongoose');
const Shop = require('../models/Shop');
const User = require('../models/User');
const cloudinaryInstance = require('../configs/cloudinary.config');

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
  const _id = Types.ObjectId();
  try {
    let result = null;
    if (req.file) {
      result = await cloudinaryInstance.uploader.upload(req.file.path, {
        public_id: `${_id}_photo`,
        folder: 'siternak/shops',
      });
    }

    const shop = await Shop.create({ _id, _userId: user_id, name, description, image: result?.secure_url ?? '' });
    await User.findByIdAndUpdate(user_id, { isSeller: true, role: 0 });
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

/**
 * Update Shop
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.update = async (req, res) => {
  const { name, description } = req.body;
  const id = req.params.id;

  const updatedShop = {};
  if (name) updatedShop.name = name;
  if (description) updatedShop.description = description;

  try {
    const shop = await Shop.findByIdAndUpdate(id, updatedShop, { new: true, runValidators: true });
    res.status(200).json({ status: 200, success: true, data: shop });
  } catch (err) {
    res.status(409).json({ status: 409, success: false, message: err.message });
  }
};

/**
 * Update shop image
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.updateImage = async (req, res) => {
  const { shop_id } = req.params;

  try {
    const result = await cloudinaryInstance.uploader.upload(req.file.path, {
      public_id: `${shop_id}_photo`,
      folder: 'siternak/shops',
    });

    const shop = await Shop.findByIdAndUpdate(
      shop_id,
      { image: result.secure_url },
      { new: true, runValidators: true }
    );
    res.status(200).json({ status: 200, success: true, data: shop });
  } catch (err) {
    res.status(409).json({ status: 409, success: false, message: err.message });
  }
};
