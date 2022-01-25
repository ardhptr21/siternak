const { request, response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * Login user to get token
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ status: 400, success: false, message: 'User with that email is not exists' });

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) return res.status(400).json({ status: 400, success: false, message: 'Invalid password' });
    const TOKEN = jwt.sign({ userId: user._id }, process.env.SECRET_JWT_KEY);
    return res.status(200).json({ status: 200, success: true, message: 'Login success', data: { user, token: TOKEN } });
  } catch (err) {
    return res.status(500).json({ status: 500, success: false, message: 'Something went wrong' });
  }
};

/**
 * Verify token
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.verify = async (req, res) => {
  const TOKEN = req.header('Authorization');
  if (!TOKEN) return res.status(401).json({ status: 401, verify: false, message: 'Token is not provided' });
  try {
    const decoded = jwt.verify(TOKEN, process.env.SECRET_JWT_KEY);
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(400).json({ status: 400, verify: false, message: 'User not found' });
    return res.status(200).json({ status: 200, verify: true, message: 'Token is valid' });
  } catch (err) {
    res.status(500).json({ status: 500, verify: false, message: 'Something went wrong' });
    console.log(err);
  }
};
