import React from 'react';
import Search from '../Search';

const Landing = () => {
  return (
    <main>
      <div className="landing__image" />
      <div className="landing--center">
        <h1 className="landing__title">Search for Recipes</h1>
        <div className="landing__field">
          <Search />
        </div>
      </div>
    </main>
  );
};

export default Landing;
