import {
  REQUEST_RECIPES,
  GENERATE_RECIPES,
  REQUEST_RECIPE,
  GET_RECIPE,
} from '../actions/types';

const initialState = {
  recipes: [],
  recipe: {},
  isFetchingRecipes: false,
  isFetchingRecipe: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_RECIPES:
      return {
        ...state,
        isFetchingRecipes: true,
      };
    case GENERATE_RECIPES:
      return {
        ...state,
        isFetchingRecipes: false,
        recipes: action.payload.data.recipes,
      };
    case REQUEST_RECIPE:
      return {
        ...state,
        isFetchingRecipe: true,
      };
    case GET_RECIPE:
      return {
        ...state,
        isFetchingRecipe: false,
        recipe: action.payload.data.recipe,
      };
    default:
      return state;
  }
}
