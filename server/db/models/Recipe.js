const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  recipe_id: {
    type: String,
    required: true,
  },
  users: [
    {
      _id: {
        type: String,
        required: true,
      },
    },
  ],
  title: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = { Recipe };
