import React from "react";
import classes from "./navbar.module.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to="/" className={classes.left}>
          FlavorFusion
        </Link>
        <ul className={classes.center}>
          <li className={classes.listItem}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link to={"/categories"} style={{ textDecoration: "none" }}>
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
