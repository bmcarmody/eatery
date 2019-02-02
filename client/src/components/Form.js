import React from 'react';

const Form = props => {
  return (
    <div
      className={props.register ? 'card card--register' : 'card card--login'}
    >
      <form className="form">
        <h1 className="form__title">{props.register ? 'Register' : 'Login'}</h1>
        <div className="form__title__border" />

        {props.register && (
          <div className="form__name">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
        )}

        <div className="form__email">
          <label for="name">Email</label>
          <br />
          <input type="text" id="email" placeholder="Email" />
        </div>

        <div className="form__password">
          <label for="name">Password</label>
          <input type="text" id="password" placeholder="Password" />
        </div>

        {props.register && (
          <div className="form__confirm-password">
            <label for="confirmPass">Confirm Password</label>
            <input
              type="text"
              id="confirmPass"
              placeholder="Confirm Password"
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
