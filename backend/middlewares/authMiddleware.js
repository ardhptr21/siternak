const { request, response } = require('express');
const { verify, JsonWebTokenError } = require('jsonwebtoken');

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
