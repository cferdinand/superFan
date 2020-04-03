import React, { useState } from "react";
import Login from "./Login.jsx";
import Nav from "../containers/NavContainer.jsx";

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
