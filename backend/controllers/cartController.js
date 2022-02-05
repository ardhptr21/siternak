const { request, response } = require('express');
const Cart = require('../models/Cart');

/**
 * Get one cart by user id
 * @param {request} req
 * @param {response} res
 */
module.exports.getByUserId = async (req, res) => {
  const _userId = req.params.user_id;

  try {
    let cart = await Cart.findOne({ _userId });

    if (!cart) {
      cart = [];
    }

    res.status(200).json({ status: 200, success: true, data: cart });
  } catch (err) {
    res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

/**
 *  Add new cart
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.create = async (req, res) => {
  const user_id = req.params.user_id;
  const { product_id, quantity } = req.body;

  const cartData = { _productId: product_id, quantity };

  try {
    const cart = await Cart.findOne({ _userId: user_id });
    if (!cart) {
      const cart = await Cart.create({ _userId: user_id, carts: [cartData] });
      return res.status(201).json({ status: 201, success: true, message: 'Cart created successfully', data: cart });
    }

    const cartItem = await Cart.findOneAndUpdate(
      { _userId: user_id },
      { $push: { carts: cartData } },
      { new: true, runValidators: true }
    );
    res.status(200).json({ status: 200, success: true, data: cartItem });
  } catch (err) {
    res.status(409).json({ status: 409, success: false, message: err.message });
  }
};

module.exports.updateOne = async (req, res) => {
  const user_id = req.params.user_id;
  const { product_id, quantity } = req.body;

  const cartData = {};
  if (product_id) cartData._productId = product_id;
  if (quantity) cartData.quantity = +quantity;

  try {
    const cart = await Cart.findOne({ _userId: user_id });

    if (!cart) {
      return res.status(404).json({ status: 404, success: false, message: 'Cart not found' });
    }

    const carts = cart.carts.map((v) => {
      if (v._productId.toString() === product_id) {
        return cartData;
      }
      return v;
    });

    const cartItem = await Cart.findOneAndUpdate(
      { _userId: user_id },
      { $set: { carts } },
      { new: true, runValidators: true }
    );

    res.status(200).json({ status: 200, success: true, data: cartItem });
  } catch (err) {
    res.status(409).json({ status: 409, success: false, message: err.message });
  }
};

module.exports.deleteCartItem = async (req, res) => {
  const { user_id, product_id } = req.params;

  try {
    const cart = await Cart.findOne({ _userId: user_id });

    if (!cart) {
      return res.status(404).json({ status: 404, success: false, message: 'Cart not found' });
    }

    const carts = cart.carts.filter((v) => v._productId.toString() !== product_id);

    const cartItem = await Cart.findOneAndUpdate(
      { _userId: user_id },
      { $set: { carts } },
      { new: true, runValidators: true }
    );

    res.status(200).json({ status: 200, success: true, data: cartItem });
  } catch (err) {
    res.status(409).json({ status: 409, success: false, message: err.message });
  }
};
