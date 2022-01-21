const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name can't be empty"],
    },
    username: {
      type: String,
      required: [true, "Username can't be empty"],
      unique: true,
      validate: {
        validator: (v) => /^[a-zA-Z0-9]+$/.test(v),
        message: 'Username can only contain letters and numbers',
      },
    },
    telephone: {
      type: String,
      required: [true, "Telephone can't be empty"],
      validate: {
        validator: (v) => /^[0-9]+$/.test(v),
        message: 'Telephone can only contain numbers',
      },
    },
    address: {
      type: {
        _id: false,
        province: {
          type: String,
          required: [true, "Province can't be empty"],
        },
        city: {
          type: String,
          required: [true, "City can't be empty"],
        },
        district: {
          type: String,
          required: [true, "District can't be empty"],
        },
        detail: {
          type: String,
          required: [true, "Detail can't be empty"],
        },
      },
    },
    photo: {
      required: false,
      type: String,
    },
    role: {
      type: Number,
      required: true,
      default: 1,
    },
    isSeller: {
      type: Boolean,
      required: true,
      default: false,
    },
    _shopId: {
      type: mongoose.Types.ObjectId,
      required: false,
      default: null,
    },
    email: {
      required: [true, "Email can't be empty"],
      type: String,
      validate: {
        validator: (v) => !Joi.string().email({ allowUnicode: false }).validate(v).error,
        message: 'Invalid email',
      },
    },
    password: {
      type: String,
      required: [true, "Password can't be empty"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('User', userSchema);
