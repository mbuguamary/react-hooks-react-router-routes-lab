import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    <NavLink
        to="/">
        Home
      </NavLink>

      <NavLink
        to="/directors">
        Directors
      </NavLink>

      <NavLink
        to="/movies">
        Movies
      </NavLink>

      <NavLink
        to="/actors">
        Actors
      </NavLink>

    {/*{code here}*/}</div>;
}

export default NavBar;
