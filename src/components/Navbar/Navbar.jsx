import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const getClass = ({ isActive: juanito }) => {
  if (juanito) return "navbar__link navbar__link--active";
  else return "navbar__link";
};

// Desestructuracion en objetos: el nombre es lo importante
// Desestructuracion en arrays: la posición es lo importante

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink to="/" className={getClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={getClass}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
