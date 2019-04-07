import React from 'react';
import Searchbar from '../molecules/Searchbar';

const Home = () => {
  return (
    <main>
      <div className="home__image" />
      <div className="home--center">
        <h1 className="home__title">Search for Recipes</h1>
        <div className="home__field">
          <Searchbar />
        </div>
      </div>
    </main>
  );
};

export default Home;
