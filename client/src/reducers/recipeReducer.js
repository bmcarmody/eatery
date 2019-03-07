import { GENERATE_RECIPES, GET_RECIPES } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GENERATE_RECIPES:
      return action.payload.data.recipes;
    case GET_RECIPES:
      return state.recipes;
    default:
      return state;
  }
}
