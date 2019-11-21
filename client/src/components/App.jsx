import React, { useState } from "react";
import Login from "./Login.jsx";
import Nav from "./Nav.jsx";

const App = () => {
  const [elementClass, updateClassName] = useState("pageBody");

  return (
    <div>
      <div className="navigation">
        <Nav />
      </div>
      <div className={elementClass}>
        <div className="loginContainer">
          <Login updateClassName={updateClassName} />
        </div>
      </div>
    </div>
  );
};
export default App;
