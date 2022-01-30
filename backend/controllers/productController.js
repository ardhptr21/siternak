const { request, response } = require('express');
const { Types } = require('mongoose');
const Product = require('../models/Product');
const cloudinaryInstance = require('../configs/cloudinary.config');

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
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 * Get specific product
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.getOne = async (req, res) => {
  const slug = req.params.slug;
  try {
    const product = await Product.findOne({ slug });
    res.status(200).json({ status: 200, success: true, data: product });
  } catch (err) {
    res.status(500).json({ status: 409, success: false, message: err.message });
  }
};

/**
 * Create a new product
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.create = async (req, res) => {
  const { shop_id, name, price, description, category_id, stock } = req.body;
  const _id = Types.ObjectId();
  try {
    const result = await cloudinaryInstance.uploader.upload(req.file.path, {
      public_id: `${_id}_photo`,
      folder: 'siternak/products',
    });

    const product = await Product.create({
      _id,
      _shopId: shop_id,
      _categoryId: category_id,
      name,
      price,
      description,
      stock,
      image: result.secure_url,
    });
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
    await cloudinaryInstance.uploader.destroy(`${product_id}_photo`, {
      folder: 'siternak/products',
    });
    res.status(200).json({ status: 200, success: true, message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 * Update a product
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.update = async (req, res) => {
  const product_id = req.params.product_id;
  const { name, price, category_id, description, stock, image } = req.body;

  const updatedProduct = {};

  if (name) updatedProduct.name = name;
  if (price) updatedProduct.price = price;
  if (category_id) updatedProduct._categoryId = category_id;
  if (description) updatedProduct.description = description;
  if (stock) updatedProduct.stock = stock;
  if (image) updatedProduct.image = image;

  try {
    const product = await Product.findByIdAndUpdate(product_id, updatedProduct, { new: true, runValidators: true });
    res.status(200).json({ status: 200, success: true, data: product });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 * Update image product
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.updateImage = async (req, res) => {
  const product_id = req.params.product_id;

  try {
    const result = await cloudinaryInstance.uploader.upload(req.file.path, {
      public_id: `${product_id}_photo`,
      folder: 'siternak/products',
    });

    const product = await Product.findByIdAndUpdate(
      product_id,
      { image: result.secure_url },
      { new: true, runValidators: true }
    );
    res.status(200).json({ status: 200, success: true, data: product });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};
