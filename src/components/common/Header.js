import React from "react";
import { NavLink } from "react-router-dom";

const ActiveStyle = { color: "#43e", borderBottom: '1px solid golden' };

const Header = () => (
  <div className="jumbotron">
    <nav>
      <NavLink activeStyle={ActiveStyle} to="/" exact>
        Home
      </NavLink>
      
      {"|"}
      <NavLink activeStyle={ActiveStyle} to="/about">
        About
      </NavLink>{"|"}
      <NavLink activeStyle={ActiveStyle} to="/courses">
        Courses
      </NavLink>
    </nav>
  </div>
);
export default Header;
