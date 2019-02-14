import React from 'react';
import { Link } from 'react-router-dom';

const Form = props => {
  return (
    <div
      className={props.register ? 'card card--register' : 'card card--login'}
    >
      <form className="form" onSubmit={props.onSubmit}>
        <h1 className="form__title">{props.register ? 'Register' : 'Login'}</h1>
        <div className="form__title__border" />

        {props.register && (
          <div className="form__name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={props.onChange}
              name="name"
            />
          </div>
        )}

        <div className="form__email">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            onChange={props.onChange}
            name="email"
          />
        </div>

        <div className="form__password">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={props.onChange}
            name="password"
          />
          {props.register && (
            <div className="form__password__label form__password__label--alignment font__kepler">
              Password must be atleast 8 characters
            </div>
          )}
        </div>

        {props.register && (
          <div className="form__confirm-password">
            <label htmlFor="confirmPass">Confirm Password</label>
            <input
              type="password"
              id="confirmPass"
              placeholder="Confirm Password"
              onChange={props.onChange}
              name="confirmPass"
            />
          </div>
        )}

        <button className="form__button" type="submit">
          {props.register ? 'Register' : 'Login'}
        </button>

        <div className="font__kepler form__guide">
          {props.register ? (
            <React.Fragment>
              Already have an account? &nbsp;
              <Link
                to="/login"
                className="nav__selected form__guide--color-fix"
              >
                Login
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              Don't have an account? &nbsp;
              <Link
                to="/register"
                className="nav__selected form__guide--color-fix"
              >
                Register
              </Link>
            </React.Fragment>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
