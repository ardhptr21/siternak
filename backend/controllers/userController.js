const { request, response } = require('express');
const User = require('../models/User');

/**
 * Get user by id
 *
 * @param {request} req
 * @param {response} res
 * @returns
 */
module.exports.get = async (req, res) => {
  const user_id = req.params.user_id;

  try {
    const user = await User.findById(user_id);

    if (!user) {
      return res.status(404).json({ status: 404, success: false, message: 'User not found' });
    }

    delete user._doc.password;

    return res.status(200).json({ status: 200, success: true, data: user });
  } catch (err) {
    return res.status(409).json({ status: 409, success: false, message: err.message });
  }
};

/**
 * Create a new User
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.create = async (req, res) => {
  const { name, username, telephone, province, city, district, detail, email, password } = req.body;

  try {
    const user = await User.create({
      name,
      username,
      telephone,
      address: {
        province,
        city,
        district,
        detail,
      },
      email,
      password,
    });
    return res.status(200).json({ status: 201, success: true, data: { user_id: user._id } });
  } catch (err) {
    res.status(409).json({ status: 409, success: false, message: err.message });
    console.log(err);
  }
};
