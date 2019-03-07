import axios from 'axios';
import { GENERATE_RECIPES } from '../actions/types';
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
