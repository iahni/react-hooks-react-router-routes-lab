import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
 return (
 <div>{
  <nav className ="navbar">
    <a href ='/'className = 'a-nav'>
      <ul>
        <li><NavLink to='/movies'>Movies</NavLink></li>
        <li> <NavLink to ='/directors'>Directors</NavLink></li>
        <li><NavLink to ='/actors'>Actors</NavLink> </li>
        <li><NavLink to ='/home'>Home</NavLink> </li>
      
      </ul>
    </a>
  </nav>
  }

 </div>)}

export default NavBar;
