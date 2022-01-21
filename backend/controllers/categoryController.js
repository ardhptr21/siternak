const { request, response } = require('express');
const Category = require('../models/Category');

/**
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ status: 200, success: true, data: categories });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 * Create new category
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.create = async (req, res) => {
  const { name, description } = req.body;

  try {
    const category = await Category.create({ name, description });
    res.status(201).json({ status: 201, success: true, message: 'Category created successfully', data: category });
  } catch (err) {
    res.status(409).json({ status: 409, success: false, message: err.message });
  }
};
/**
 * Update category
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.update = async (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;

  const updatedCategory = {};

  if (name) updatedCategory.name = name;
  if (description) updatedCategory.description = description;

  try {
    const category = await Category.findByIdAndUpdate(id, updatedCategory, { new: true });
    res.status(200).json({ status: 200, success: true, message: 'Category updated successfully', data: category });
  } catch (err) {
    res.status(409).json({ status: 409, success: false, message: err.message });
  }
};

/**
 * Delete category
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await Category.findByIdAndDelete(id);
    res.status(200).json({ status: 200, success: true, message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};
