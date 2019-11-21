import React from "react";

const Nav = () => {
  return (
    <div className="nav_bar">
      <div className="nav_logo">
        <img src="images/logo.png" className="nav_logo_image" />
      </div>
      <div className="logout">
        <p className="logout_button">logout</p>
      </div>
    </div>
  );
};

export default Nav;
