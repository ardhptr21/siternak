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
    return res.status(200).json({ status: 200, success: true, message: 'Login success', token: TOKEN });
  } catch (err) {
    return res.status(500).json({ status: 500, success: false, message: 'Something went wrong' });
  }
};
