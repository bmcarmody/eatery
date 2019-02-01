import React from 'react';

const Landing = () => {
  return (
    <div>
      <div className="landing__image" />
      <div className="landing">
        <div className="landing--center">
          <h1 className="landing__title">Search for Recipes</h1>
          <div className="landing__field">
            <input
              className="landing__search"
              type="textbox"
              placeholder="Search Recipes"
              autoFocus
            />
            <button type="submit">
              <i class="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
