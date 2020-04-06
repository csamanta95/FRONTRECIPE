import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


const NavBar = () => {
    return(
        <ul className="nav">
          <li className="li">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="li">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="li">
            <NavLink to="/register">Register</NavLink>
          </li>
          <li className="li">
            <NavLink to="/pantry">Pantry</NavLink>
          </li>
          <li className="li">
            <NavLink to="/refrigerator">Refrigerator</NavLink>
          </li>
          <li className="li">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          
        </ul>
        
      )
    };

export default NavBar;