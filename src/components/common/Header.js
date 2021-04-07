import React from 'react'
import {NavLink } from 'react-router-dom';

const ActiveStyle={color: "#43e"}

const Header = ()=> (
    <div className="jumbotron">

      <nav>
          <NavLink  activeStyle={ActiveStyle} to="/" exact>Home</NavLink> {"|"}
          <NavLink activeStyle={ActiveStyle} to="/about">About</NavLink>
      </nav>

    </div>
)
export default Header;