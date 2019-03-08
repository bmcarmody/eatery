import axios from 'axios';
import { GENERATE_RECIPES, GET_RECIPE } from '../actions/types';
import { API_KEY } from '../keys.json';

// Get recipes once the search button is clicked
export const generateRecipes = (query, history) => dispatch => {
  history.push('/recipes');
  axios
    .get(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${query}`)
    .then(res => {
      dispatch({ type: GENERATE_RECIPES, payload: res });
    })
    .catch(err => console.log(err));
};

export const getRecipe = id => dispatch => {
  axios
    .get(`https://www.food2fork.com/api/get?key=${API_KEY}&rId=${id}`)
    .then(res => {
      dispatch({ type: GET_RECIPE, payload: res });
    })
    .catch(err => console.log(err));
};
