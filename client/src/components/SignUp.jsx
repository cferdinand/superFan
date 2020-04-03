import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Nav from "./Nav.jsx";
import addUser from "../actions/addUser.js";

const SignUp = () => {
  const [username, updateUserName] = useState("");
  const [password, updatePassword] = useState("");
  const history = useHistory();

  const addNewUser = async () => {
    let isLoggedIn = await addUser(username, password);
    isLoggedIn ? history.push("/teams") : "";
  };

  return (
    <div>
      <Nav />
      <form
        className="signupForm"
        onSubmit={e => {
          e.preventDefault();
          addNewUser();
        }}
      >
        <label>Username: </label>
        <div className="username">
          <input
            type="text"
            name="username"
            onChange={event => {
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
        <button type="submit" className="submit">
          Submit
        </button>
        <button type="reset" className="reset">
          Reset
        </button>
      </form>
      <div>
        <p>
          Already have an account? <Link to="/login">Click Here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
