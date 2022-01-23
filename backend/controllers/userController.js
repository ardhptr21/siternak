const { request, response } = require('express');
const User = require('../models/User');
const cloudinaryInstance = require('../configs/cloudinary.config');

/**
 * Get all users
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.getAll = async (_, res) => {
  try {
    const users = await User.find();

    users.map((user) => delete user._doc.password);

    return res.status(200).json({ status: 200, success: true, data: users });
  } catch (err) {
    return res.status(500).json({ status: 500, success: false, message: err.message });
  }
};

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

/**
 * Update user
 * @param {request} req
 * @param {response} res
 */
module.exports.update = async (req, res) => {
  const user_id = req.params.user_id;
  const { name, username, telephone, province, city, district, detail } = req.body;

  const updated_user = {};

  if (name) updated_user.name = name;
  if (username) updated_user.username = username;
  if (telephone) updated_user.telephone = telephone;

  if (province) updated_user['address.province'] = province;
  if (city) updated_user['address.city'] = city;
  if (district) updated_user['address.district'] = district;
  if (detail) updated_user['address.detail'] = detail;

  // console.log(updated_user);
  // return res.send('ok');
  try {
    const user = await User.findByIdAndUpdate(user_id, updated_user, { new: true, runValidators: true });

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
 * Update user profile photo
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.updatePhoto = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const result = await cloudinaryInstance.uploader.upload(req.file.path, {
      public_id: `${user_id}_photo`,
      width: 500,
      height: 500,
      crop: 'fill',
      folder: 'siternak/users',
    });

    const user = await User.findByIdAndUpdate(
      user_id,
      { photo: result.secure_url },
      { new: true, runValidators: true }
    );
    delete user._doc.password;
    res.status(200).json({ status: 200, success: true, data: user });
  } catch (err) {
    res.status(409).json({ status: 409, success: false, message: err.message });
    console.log(err);
  }
};

/**
 * Delete user by id
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.delete = async (req, res) => {
  const user_id = req.params.user_id;

  try {
    const user = await User.findByIdAndDelete(user_id);

    if (!user) {
      return res.status(404).json({ status: 404, success: false, message: 'User not found' });
    }

    return res.status(200).json({ status: 200, success: true, message: 'User deleted' });
  } catch (err) {
    return res.status(500).json({ status: 500, success: false, message: err.message });
  }
};
