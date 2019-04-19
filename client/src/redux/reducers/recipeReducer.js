import {
  REQUEST_RECIPES,
  GENERATE_RECIPES,
  REQUEST_RECIPE,
  GET_RECIPE,
  SET_SEARCH_QUERY,
  SET_PAGE,
  FETCH_SAVED_RECIPES,
  CLEAR_RECIPES,
  IS_RECIPE_SAVED,
  CLEAR_RECIPE,
} from '../actions/types';

const initialState = {
  recipes: [],
  recipe: {},
  isFetchingRecipes: false,
  isFetchingRecipe: false,
  isSaved: false,
  searchQuery: '',
  page: 1,
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
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case IS_RECIPE_SAVED:
      return { ...state, isSaved: action.payload };
    case FETCH_SAVED_RECIPES:
      return {
        ...state,
        isFetchingRecipes: false,
        recipes: action.payload.data,
      };
    case CLEAR_RECIPES:
      return {
        ...state,
        recipes: [],
        recipe: {},
      };
    case CLEAR_RECIPE:
      return {
        ...state,
        recipe: {},
      };
    default:
      return state;
  }
}
