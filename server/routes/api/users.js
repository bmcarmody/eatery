// Library imports
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const _ = require('lodash');

// Mongoose models
const { User } = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.status(400).json({ msg: 'Users Works' }));

// @route   POST api/users/register
// @desc    Register users to website
// @access  Public
router.post('/register', (req, res) => {
  const body = _.pick(req.body, ['name', 'email', 'password']);
  const user = new User(body);

  user
    .save()
    .then(() => {
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

module.exports = router;
