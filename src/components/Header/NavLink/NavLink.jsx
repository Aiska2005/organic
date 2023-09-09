import React from "react";
import { Link } from "react-router-dom";

const NavLink = () => {
  return (
    <ul>
      <Link to="/">
        <li>home</li>
      </Link>
      <Link to="/shop">
        <li>shop</li>
      </Link>
      <Link to="/news">
        <li>news</li>
      </Link>
    </ul>
  );
};

export default NavLink;
