import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const LoginForm = props => {
  return (
    <div className="form__container form__container--login">
      <form className="form" onSubmit={props.onSubmit}>
        <h1 className="form__title">Login</h1>
        <div className="form__title__border" />
        <div
          className={classnames('form__email', {
            'form__error--red': props.errors.email,
          })}
        >
          <label htmlFor="email">Email</label>
          {props.errors.email && (
            <div className="font__kepler form__error">{props.errors.email}</div>
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
            {props.errors.password && (
              <div className="font__kepler form__error">
                {props.errors.password}
              </div>
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

        <button className="form__button" type="submit">
          Login
        </button>

        <div className="font__kepler form__guide">
          <React.Fragment>
            Don't have an account? &nbsp;
            <Link
              to="/register"
              className="nav__selected form__guide--color-fix"
            >
              Register
            </Link>
          </React.Fragment>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
