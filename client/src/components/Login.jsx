import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Login = () => {
  const login = () => {
    //validateUser();
  };
  return (
    <div>
      <form
        className="loginForm"
        onSubmit={() => {
          login();
        }}
      >
        <label>Username: </label>
        <div className="username">
          <input type="text" name="username" />
        </div>
        <label>Password: </label>
        <div className="password">
          <input type="password" name="pwd" />
        </div>
        <Link to="/teams">
          <button type="submit" className="submit">
            Login
          </button>
        </Link>
        <button type="reset" className="reset">
          Reset
        </button>
      </form>
      <div>
        <p>
          Don't have an account?
          <Link to="/teams">
            <span> Sign Up!</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
