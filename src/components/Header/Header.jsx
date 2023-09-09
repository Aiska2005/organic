import React from "react";
import NavLink from "./NavLink/NavLink";
import "./Header.css";
import logo from "../../../public/header/Logo.png";
import Search from "./Search/Search";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} alt="" />
        <h1>Organick</h1>
      </div>
      <NavLink />
      <Search />
    </div>
  );
};

export default Header;
