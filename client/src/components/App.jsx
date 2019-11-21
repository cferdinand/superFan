import React, { useState } from "react";
import Login from "../containers/LoginContainer.jsx";
import Nav from "./Nav.jsx";

const App = () => {
  return (
    <div>
      <div className="navigation">
        <Nav />
      </div>
      <div className="pageBody">
        <div className="loginContainer">
          <Login />
        </div>
      </div>
    </div>
  );
};
export default App;
