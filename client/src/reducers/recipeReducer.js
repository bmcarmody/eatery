import { GENERATE_RECIPES, GET_RECIPE } from '../actions/types';

const initialState = {
  recipes: [],
  recipe: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GENERATE_RECIPES:
      return {
        ...state,
        recipes: action.payload.data.recipes,
      };
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.payload.data.recipe,
      };
    default:
      return state;
  }
}
