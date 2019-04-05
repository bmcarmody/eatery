import React from 'react';
import Searchbar from '../molecules/Searchbar';

const HomePage = () => {
  return (
    <main>
      <div className="landing__image" />
      <div className="landing--center">
        <h1 className="landing__title">Search for Recipes</h1>
        <div className="landing__field">
          <Searchbar />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
