import { GET_RECIPES } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return action.payload.data.recipes;
    default:
      return state;
  }
}
