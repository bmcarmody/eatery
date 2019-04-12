import React from 'react';
import { NavLink } from 'react-router-dom';

const GuestLinks = props => {
  const onClick = () => {
    if (props.closeMenu) {
      props.closeMenu();
    }
  };
  return (
    <React.Fragment>
      <NavLink
        className="navbar__link navbar__link--first"
        activeClassName="navbar--selected"
        exact
        onClick={onClick}
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className="navbar__link navbar__link--last"
        activeClassName="navbar--selected"
        exact
        onClick={onClick}
        to="/register"
      >
        Register
      </NavLink>
    </React.Fragment>
  );
};

export default GuestLinks;
