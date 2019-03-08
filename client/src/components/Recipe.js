import React from 'react';

const Recipe = props => {
  return (
    <li key={props.recipe.recipe_id} className="recipe__item">
      <a className="recipe__results__link" href={`#${props.recipe.recipe_id}`}>
        <figure className="recipe__results__fig">
          <img src={props.recipe.image_url} alt={props.recipe.title} />
        </figure>
        <div className="recipe__results__data">
          <h4 className="recipe__results__name font__kepler">
            {props.recipe.title}
          </h4>
          <p className="recipe__results__author">{props.recipe.publisher}</p>
        </div>
      </a>
    </li>
  );
};

export default Recipe;
