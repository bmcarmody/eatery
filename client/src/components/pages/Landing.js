import React from 'react';

const Landing = () => {
  return (
    <div>
      <div className="landing__image" />
      <div className="landing">
        <div className="landing--center">
          <h1 className="landing__title">Search for Recipes</h1>
          <input
            className="landing__search"
            type="textbox"
            placeholder="Search Recipes"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
