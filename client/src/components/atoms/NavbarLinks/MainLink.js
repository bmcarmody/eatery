import React from 'react';
import { NavLink } from 'react-router-dom';

const MainLink = () => {
  return (
    <NavLink
      className="navbar__link navbar__title"
      activeClassName="navbar--selected"
      exact
      to="/"
    >
      Eatery
    </NavLink>
  );
};

export default MainLink;
