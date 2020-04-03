import React from "react";
import { useHistory, Link, BrowserRouter as Router } from "react-router-dom";
import logout from "../actions/logout.js";

const Nav = () => {
  const history = useHistory();

  const logoutUser = async () => {
    let isLoggedOut = await logout();
    isLoggedOut ? history.push("/login") : "";
  };

  const location = window.location.pathname;
  const paths = ["/login", "/signup"];
  return (
    <div className="nav_bar">
      <div className="nav_logo">
        <img src="images/logo.png" className="nav_logo_image" />
      </div>
      <div className="logout">
        {!paths.includes(location) ? (
          <p className="logout_button" onClick={logoutUser}>
            logout
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Nav;
