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
router.post(
  '/save',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { recipe_id, title, publisher, image_url } = req.body;
    const newRecipe = {
      recipe_id,
      users: [{ _id: req.user.id }],
      title,
      publisher,
      image_url,
    };

    Recipe.findOne({ recipe_id: newRecipe.recipe_id }).then(recipe => {
      if (recipe) {
        recipe.users.push({ _id: req.user._id });
        recipe.save().then(savedRecipe => res.status(200).json(savedRecipe));
      } else {
        new Recipe(newRecipe).save().then(recipeSave => res.json(recipeSave));
      }
    });
  }
);

// @route   GET api/recipes/fetch-recipe/:id
// @desc    Check to see if a user has saved a recipe
// @access  Private
router.get(
  '/fetch-recipe/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const recipe_id = req.params.id;

    Recipe.find({ recipe_id, users: { _id: req.user.id } }).then(recipe => {
      if (recipe[0]) {
        res.send(true);
      } else {
        res.send(false);
      }
    });
  }
);

// @route   GET api/recipes/fetch-recipes
// @desc    Fetch all recipes that user has saved
// @access  Private
router.get(
  '/fetch-recipes',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Recipe.find({ users: { _id: req.user.id } }).then(recipes => {
      res.send(recipes);
    });
  }
);

router.delete(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const recipe_id = req.params.id;
    Recipe.find({ recipe_id, users: { _id: req.user.id } }).then(recipes => {
      res.send(recipes);
    });
  }
);

module.exports = router;
