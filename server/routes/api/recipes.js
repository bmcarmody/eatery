// Library imports
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Mongoose models
const { Recipe } = require('../../db/models/Recipe');
const { User } = require('../../db/models/User');

// @route   GET api/recipes/test
// @desc    Tests recipes route
// @access  Public
router.get('/test', (req, res) =>
  res.status(400).json({ msg: 'Recipes Works' })
);

// @route   POST api/recipes/save
// @desc    Save a recipe to the database
// @access  Private
// router.post('/save', (req, res) => {
router.get(
  '/save',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { id, title, publisher, img_url } = req.body;
    const newRecipe = {
      _id: id,
      users: [{ _id: req.user.id }],
      title,
      publisher,
      img_url,
    };

    Recipe.findOne({ _id: newRecipe._id }).then(recipe => {
      if (recipe) {
        recipe.users.push({ _id: req.user._id });
        res.json(recipe);
      }
      new Recipe(newRecipe).save().then(recipeSave => res.json(recipeSave));
    });
  }
);

module.exports = router;
