import React from "react";

const LoginForm = props => (
  <div>
    <form onSubmit={props.handleLogin} className={"login-form"}>
      <h2><u>Login Here</u></h2>
      <div>
        User Name:{" "}
        <input
          type="text"
          value={props.username}
          onChange={props.handleNameChange}
        />
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
  </div>
);

export default LoginForm;
