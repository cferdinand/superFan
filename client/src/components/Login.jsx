import React, { useEffect, useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./MainPage.jsx";

const Login = ({ validateUser, loggedIn }) => {
  const [username, updateUserName] = useState("");
  const [password, updatePassword] = useState("");

  useEffect(() => {
    if (!!loggedIn) {
      localStorage.removeItem("superfan_sessionId");
    }
  }, [loggedIn]);

  const login = () => {
    validateUser(username, password);
  };
  return (
    <div>
      <form
        className="loginForm"
        onSubmit={e => {
          e.preventDefault();
          login();
        }}
      >
        <label>Username: </label>
        <div className="username">
          <input
            type="text"
            name="username"
            onChange={event => {
              console.log(username);
              updateUserName(event.target.value);
            }}
          />
        </div>
        <label>Password: </label>
        <div className="password">
          <input
            type="password"
            name="pwd"
            onChange={event => {
              updatePassword(event.target.value);
            }}
          />
        </div>
        <Link to="/teams">
          <button type="submit" className="submit">
            Login
          </button>
        </Link>
        <button
          type="reset"
          className="reset"
          onClick={e => {
            e.preventDefault;
          }}
        >
          Reset
        </button>
      </form>
      <div>
        <p>
          Don't have an account?
          <Link to="/signup">
            <span> Sign Up!</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
