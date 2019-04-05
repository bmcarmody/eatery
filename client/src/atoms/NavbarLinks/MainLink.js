import React from 'react';
import { NavLink } from 'react-router-dom';

const MainLink = () => {
  return (
    <NavLink
      className="nav__link nav__title"
      activeClassName="nav--selected"
      exact
      to="/"
    >
      Eatery
    </NavLink>
  );
};

export default MainLink;
