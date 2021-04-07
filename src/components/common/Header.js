import React from 'react'
import {NavLink } from 'react-router-dom';

const ActiveStyle={color: "#44e"}

const Header = ()=> (
    <div className="jumbotron">

      <nav>
          <NavLink activeStyle={ActiveStyle} to="/">Home</NavLink> {"|"}
          <NavLink activeStyle={ActiveStyle} to="/about">About</NavLink>
      </nav>

    </div>
)
export default Header;