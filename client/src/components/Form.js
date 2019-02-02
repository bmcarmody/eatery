import React from 'react';

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
      </form>
    </div>
  );
};

export default Form;
