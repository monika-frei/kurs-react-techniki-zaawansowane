import React from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import styles from "./Header.module.scss";

function Header() {
  return (
    <nav
      className={cx("navbar is-primary", styles.header)}
      role="navigation"
      aria-label="main navigation"
    >
      <h1 className="title is-2">Magia Reacta</h1>
      <div className="navbar-menu">
        <NavLink to="/">Docs</NavLink>
        <NavLink to="/tips">Tips</NavLink>
        <NavLink to="/patterns">Patterns</NavLink>
        <NavLink to="/components">Components</NavLink>
      </div>
    </nav>
  );
}

export default Header;
