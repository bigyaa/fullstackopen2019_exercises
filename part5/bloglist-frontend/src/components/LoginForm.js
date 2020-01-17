import React from 'react';

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit} className={"login-form"}>
      <div>
        User Name:{" "}
        <input type="text" value={props.username} onChange={props.handleNameChange} />
      </div>
      <br />
      <div>
        Password:{" "}
        <input
          type="password"
          value={props.password}
          onChange={props.handlePasswordChange}
        />
      </div>
      <br />
      <div>
        <button type="submit" className={"login-button"}>
          Login
        </button>
      </div>
    </form>
)

export default LoginForm;