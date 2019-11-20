import React from "react";

const Login = () => {
  return (
    <div>
      <form className="loginForm">
        Username: <input type="text" name="username" />
        Password: <input type="password" name="pwd" />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default Login;
