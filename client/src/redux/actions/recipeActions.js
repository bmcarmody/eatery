import axios from 'axios';
import {
  REQUEST_RECIPES,
  GENERATE_RECIPES,
  REQUEST_RECIPE,
  GET_RECIPE,
  SET_SEARCH_QUERY,
  SET_PAGE,
  IS_RECIPE_SAVED,
  FETCH_SAVED_RECIPES,
  CLEAR_RECIPES,
  CLEAR_RECIPE,
} from '../actions/types';
import { API_KEY } from '../../keys.json';

export const generateRecipes = query => dispatch => {
  dispatch({ type: REQUEST_RECIPES });
  axios
    .get(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${query}`)
    .then(res => {
      dispatch({ type: SET_SEARCH_QUERY, payload: query });
      dispatch({ type: GENERATE_RECIPES, payload: res });
    })
    .catch(err => console.log(err));
};

export const getRecipe = id => dispatch => {
  dispatch({ type: REQUEST_RECIPE });
  axios
    .get(`https://www.food2fork.com/api/get?key=${API_KEY}&rId=${id}`)
    .then(res => {
      dispatch({ type: GET_RECIPE, payload: res });
    })
    .catch(err => console.log(err));
};

export const getPage = (query, page) => dispatch => {
  dispatch({ type: REQUEST_RECIPES });
  axios
    .get(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${query}&page=${page}`
    )
    .then(res => {
      dispatch({ type: GENERATE_RECIPES, payload: res });
    })
    .catch(err => console.log(err));
};

export const setPage = page => dispatch => {
  dispatch({ type: SET_PAGE, payload: page });
};

// Register User
export const saveRecipe = recipeData => dispatch => {
  dispatch({ type: IS_RECIPE_SAVED, payload: true });
  axios
    .post('/api/recipes/save', recipeData)
    .then(res => {})
    .catch(err => console.log(err));
};

export const removeRecipe = id => dispatch => {
  axios
    .delete(`/api/recipes/delete/${id}`)
    .then(res => {
      dispatch({ type: IS_RECIPE_SAVED, payload: false });
    })
    .catch(err => console.log(err));
};

export const isRecipeSaved = id => dispatch => {
  axios.get(`/api/recipes/fetch-recipe/${id}`).then(res => {
    dispatch({ type: IS_RECIPE_SAVED, payload: res.data });
  });
};

export const fetchRecipes = () => dispatch => {
  dispatch({ type: REQUEST_RECIPES });
  axios.get('/api/recipes/fetch-recipes').then(res => {
    dispatch({ type: FETCH_SAVED_RECIPES, payload: res });
  });
};

export const clearRecipes = () => dispatch => {
  dispatch({
    type: CLEAR_RECIPES,
  });
};

export const clearRecipe = () => dispatch => {
  dispatch({
    type: CLEAR_RECIPE,
  });
};
