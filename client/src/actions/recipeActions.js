import axios from 'axios';
import { GET_RECIPES } from '../actions/types';
import { API_KEY } from '../keys.json';

// Get recipes once the search button is clicked
export const getRecipes = (query, history) => dispatch => {
  history.push('/recipes');
  axios
    .get(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${query}`, {
      crossdomain: true,
    })
    .then(res => {
      console.log('This is the result', res);
      dispatch({ type: GET_RECIPES, payload: res });
    })
    .catch(err => console.log(err));
};
