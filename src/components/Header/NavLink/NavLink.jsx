import React from "react";
import { Link } from "react-router-dom";
import "./NavLink.css";
const NavLink = () => {
  return (
    <ul>
      <Link className="link" to="/">
        <li>home</li>
      </Link>
      <Link className="link" to="/shop">
        <li>shop</li>
      </Link>
      <Link className="link" to="/news">
        <li>news</li>
      </Link>
    </ul>
  );
};

export default NavLink;
