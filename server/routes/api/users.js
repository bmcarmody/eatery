// Library imports
const express = require('express');
const router = express.Router();
const _ = require('lodash');

// Mongoose models
const { User } = require('../../db/models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.status(400).json({ msg: 'Users Works' }));

// @route   POST api/users/register
// @desc    Register users to website
// @access  Public
router.post('/register', (req, res) => {
  const body = _.pick(req.body, ['name', 'email', 'password', 'password2']);
  errorsObject = {};
  if (body.password2) {
    if (body.password2 !== body.password) {
      errorsObject['password2'] = 'Passwords do not match';
    }
  } else {
    errorsObject['password2'] = 'Please confirm your password';
  }

  const user = new User(body);

  user
    .save()
    .then(() => {
      res.json(user);
    })
    .catch(err => {
      Object.keys(err.errors).forEach(error => {
        errorsObject[error] = err.errors[error].message;
      });
      res.status(400).json(errorsObject);
    });
});

// @route   POST api/users/login
// @desc    Login user to website
// @access  Public
router.post('/login', (req, res) => {
  const body = _.pick(req.body, ['email', 'password']);

  if (!body.email || !body.password) {
    errorsObject = {};

    if (!body.email) {
      errorsObject['email'] = 'Email field is required';
    }

    if (!body.password) {
      errorsObject['password'] = 'Password field is required';
    }
    res.status(400).json(errorsObject);
  } else {
    User.findByCredentials(body.email, body.password)
      .then(user => {
        // prettier-ignore
        user.generateBearerToken().then(token => {
        res.status(200).json({success: true, token});
      })
      .catch(err => {
        res.status(400).send(err);
      })
      })
      .catch(err => {
        res
          .status(400)
          .json({ email: 'Email or password is incorrect', password: ' ' });
      });
  }
});

module.exports = router;
