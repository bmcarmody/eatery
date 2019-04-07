import React from 'react';
import { NavLink } from 'react-router-dom';

const GuestLinks = () => {
  return (
    <React.Fragment>
      <NavLink
        className="navbar__link navbar__link--first"
        activeClassName="navbar--selected"
        exact
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className="navbar__link navbar__link--last"
        activeClassName="navbar--selected"
        exact
        to="/register"
      >
        Register
      </NavLink>
    </React.Fragment>
  );
};

export default GuestLinks;
