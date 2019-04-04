const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const uniqueValidator = require('mongoose-unique-validator');

const keys = require('../../config/keys');

const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required'],
    minlength: [2, 'Name field must be longer than 2 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email field is required'],
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
    },
  },
  password: {
    type: String,
    required: [true, 'Password field is required'],
    minlength: [6, 'Password must be at least 6 characters'],
  },
});

UserSchema.set('validateBeforeSave', false);

UserSchema.pre('save', function(next) {
  const user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

UserSchema.statics.findByCredentials = function(email, password) {
  const User = this;

  return User.findOne({ email }).then(user => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

UserSchema.methods.generateBearerToken = function() {
  const user = this;
  const payload = {
    id: user.id,
    email: user.email,
  };

  return new Promise((resolve, reject) => {
    jwt.sign(payload, keys.secret, { expiresIn: 3600 }, (err, token) => {
      if (err) {
        reject(err);
      }
      const formattedToken = `Bearer ${token}`;
      resolve(formattedToken);
    });
  });
};

UserSchema.plugin(uniqueValidator, { message: 'Email is already registered' });
const User = mongoose.model('User', UserSchema);
module.exports = { User };
