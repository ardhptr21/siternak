const { request, response } = require('express');
const { verify, decode } = require('jsonwebtoken');
const User = require('../models/User');

/**
 * If user is authorized, then proceed to the next middleware.
 *
 * @param {request} req
 * @param {response} res
 * @param {Function} next
 */
module.exports.isAuth = async (req, res, next) => {
  const TOKEN = req.header('Authorization');

  if (!TOKEN) return res.status(401).json({ status: 401, allow: false, message: 'Unauthorized: Token is empty' });
  try {
    verify(TOKEN, process.env.SECRET_JWT_KEY);
    next();
  } catch (err) {
    res.status(401).json({ status: 401, allow: false, message: 'Unauthorized: Token is invalid' });
  }
};

/**
 * If user is not authorized, then proceed to the next middleware.
 *
 * @param {request} req
 * @param {response} res
 * @param {Function} next
 * @returns
 */
module.exports.isGuest = async (req, res, next) => {
  const TOKEN = req.header('Authorization');

  if (!TOKEN) return next();

  try {
    verify(TOKEN, process.env.SECRET_JWT_KEY);
    res.status(401).json({ status: 401, allow: false, message: 'Already Authorized' });
  } catch {
    next();
  }
};

/**
 * If user is authorized and type user is admin, then proceed to the next middleware.
 *
 * @param {request} req
 * @param {response} res
 */
module.exports.isAdmin = async (req, res, next) => {
  const TOKEN = req.header('Authorization');

  if (!TOKEN) return res.status(401).json({ status: 401, allow: false, message: 'Unauthorized: Token is empty' });
  try {
    verify(TOKEN, process.env.SECRET_JWT_KEY);
    const decoded = decode(TOKEN);
    const user = await User.findById(decoded.userId);

    if (user.role !== 2) {
      return res.status(401).json({ status: 401, allow: false, message: 'Unauthorized: User is not an admin' });
    }

    next();
  } catch (err) {
    res.status(401).json({ status: 401, allow: false, message: 'Unauthorized: Token is invalid' });
  }
};
