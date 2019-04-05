import React from 'react';
import { NavLink } from 'react-router-dom';

const GuestLinks = () => {
  return (
    <React.Fragment>
      <NavLink
        className="nav__link nav__link--first"
        activeClassName="nav--selected"
        exact
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className="nav__link nav__link--last"
        activeClassName="nav--selected"
        exact
        to="/register"
      >
        Register
      </NavLink>
    </React.Fragment>
  );
};

export default GuestLinks;
