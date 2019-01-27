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

// @route   POST api/users/login
// @desc    Login user to website
// @access  Public
router.post('/login', (req, res) => {
  const body = _.pick(req.body, ['email', 'password']);

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
      res.status(400).json({ error: 'Email or password is incorrect' });
    });
});

module.exports = router;
