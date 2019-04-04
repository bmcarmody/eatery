const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema(
  {
    _id: {
      type: Number,
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
    img_url: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = { Recipe };
