import React from 'react';

const Recipe = props => {
  return (
    <li className={`recipe recipe${props.recipe.recipe_id}`}>
      <div
        className="recipe__link"
        onClick={() => props.onClick(props.recipe.recipe_id)}
      >
        <figure className="recipe__fig">
          <img src={props.recipe.image_url} alt={props.recipe.title} />
        </figure>
        <div className="recipe__data">
          <h4 className="recipe__name">{props.recipe.title}</h4>
          <p className="recipe__author font__cursive">
            {props.recipe.publisher}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Recipe;
