import axios from 'axios';
import {
  REQUEST_RECIPES,
  GENERATE_RECIPES,
  REQUEST_RECIPE,
  GET_RECIPE,
} from '../actions/types';
import { API_KEY } from '../keys.json';

// Get recipes once the search button is clicked
export const fetchRecipes = () => dispatch => {
  dispatch({ type: REQUEST_RECIPES });
};

export const generateRecipes = query => dispatch => {
  axios
    .get(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${query}`)
    .then(res => {
      dispatch({ type: GENERATE_RECIPES, payload: res });
    })
    .catch(err => console.log(err));
};

export const fetchRecipe = () => dispatch => {
  dispatch({ type: REQUEST_RECIPE });
};

export const getRecipe = id => dispatch => {
  axios
    .get(`https://www.food2fork.com/api/get?key=${API_KEY}&rId=${id}`)
    .then(res => {
      dispatch({ type: GET_RECIPE, payload: res });
    })
    .catch(err => console.log(err));
};
