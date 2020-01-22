import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ name, password, handleLogin }) => {

  return (
    <div>
      <form onSubmit={handleLogin} className={'login-form'}>
        <h2><u>Login Here</u></h2>
        <div>
        User Name:{' '}
          <input
            type={name.type}
            value={name.value}
            onChange={name.onChange}
          />
        </div>
        <br />
        <div>
        Password:{' '}
          <input
            type={password.type}
            value={password.value}
            onChange={password.onChange}
          />
        </div>
        <br />
        <div>
          <button type="submit" className={'login-button'}>
          Login
          </button>
        </div>
      </form>
    </div>
  );};


LoginForm.propTypes = {
  handleLogin:PropTypes.func.isRequired,
  name:PropTypes.object.isRequired,
  password:PropTypes.object.isRequired,
};

export default LoginForm;
