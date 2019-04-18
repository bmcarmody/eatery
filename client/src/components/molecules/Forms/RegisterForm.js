import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const RegisterForm = props => {
  return (
    <div className="form__container form__container--register">
      <form className="form font__cursive" onSubmit={props.onSubmit}>
        <h1 className="form__title">Register</h1>
        <div className="form__title__border" />

        <div
          className={classnames('form__name', {
            'form__error--red': props.errors.name,
          })}
        >
          <label htmlFor="name">Name</label>
          {props.errors.name && (
            <div className="form__error">{props.errors.name}</div>
          )}
          <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={props.onChange}
            name="name"
          />
        </div>

        <div
          className={classnames('form__email', {
            'form__error--red': props.errors.email,
          })}
        >
          <label htmlFor="email">Email</label>
          {props.errors.email && (
            <div className="form__error">{props.errors.email}</div>
          )}
          <input
            type="text"
            id="email"
            placeholder="Email"
            onChange={props.onChange}
            name="email"
          />
        </div>

        <div
          className={classnames('form__password', {
            'form__error--red': props.errors.password,
          })}
        >
          <label htmlFor="name">Password</label>
          <React.Fragment>
            {props.errors.password ? (
              <div className="form__error">{props.errors.password}</div>
            ) : (
              <React.Fragment>
                <div className="form__password__label form__password__label--alignment">
                  Password must be at least 6 characters
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={props.onChange}
            name="password"
          />
        </div>

        <div
          className={classnames('form__confirm-password', {
            'form__error--red': props.errors.password2,
          })}
        >
          <label htmlFor="password2">Confirm Password</label>
          {props.errors.password2 && (
            <div className="form__error">{props.errors.password2}</div>
          )}
          <input
            type="password"
            id="password2"
            placeholder="Confirm Password"
            onChange={props.onChange}
            name="password2"
          />
        </div>

        <button className="form__button font__cursive" type="submit">
          Register
        </button>

        <div className="form__guide">
          <React.Fragment>
            Already have an account? &nbsp;
            <Link to="/login" className="nav__selected form__guide--color-fix">
              Login
            </Link>
          </React.Fragment>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
