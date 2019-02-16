import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const Form = props => {
  return (
    <div
      className={props.register ? 'card card--register' : 'card card--login'}
    >
      <form className="form" onSubmit={props.onSubmit}>
        <h1 className="form__title">{props.register ? 'Register' : 'Login'}</h1>
        <div className="form__title__border" />

        {props.register && (
          <div
            className={classnames('form__name', {
              'form__error--red': props.errors.name,
            })}
          >
            <label htmlFor="name">Name</label>
            {props.errors.name && (
              <div className="font__kepler form__error">
                {props.errors.name}
              </div>
            )}
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={props.onChange}
              name="name"
            />
          </div>
        )}

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
            'form__error--red': props.errors.password || props.errors.password2,
          })}
        >
          <label htmlFor="name">Password</label>
          {props.register ? (
            <React.Fragment>
              {props.errors.password ? (
                <div className="font__kepler form__error">
                  {props.errors.password}
                </div>
              ) : (
                <React.Fragment>
                  {props.password && (
                    <div className="form__password__label form__password__label--alignment font__kepler">
                      Password must be atleast 6 characters
                    </div>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {props.errors.password && (
                <div className="font__kepler form__error">
                  {props.errors.password}
                </div>
              )}
            </React.Fragment>
          )}
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={props.onChange}
            name="password"
          />
        </div>

        {props.register && (
          <div
            className={classnames('form__confirm-password', {
              'form__error--red': props.errors.password2,
            })}
          >
            <label htmlFor="password2">Confirm Password</label>
            {props.errors.password2 && (
              <div className="font__kepler form__error">
                {props.errors.password2}
              </div>
            )}
            <input
              type="password"
              id="password2"
              placeholder="Confirm Password"
              onChange={props.onChange}
              name="password2"
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
