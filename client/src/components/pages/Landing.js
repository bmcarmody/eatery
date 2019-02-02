import React from 'react';

const Landing = () => {
  return (
    <main>
      <div className="landing__image" />
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
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Landing;
