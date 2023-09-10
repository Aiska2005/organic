import React from "react";
import NavLink from "./NavLink/NavLink";
import "./Header.css";
import logo from "/public/header/Logo.png";
import Search from "./Search/Search";

const Header = () => {
  return (
    <div className="header">
      <div className="blockLogo">
        <img className="logo" src={logo} alt="" />
        <h2>Organick</h2>
      </div>
      <NavLink />
      <Search />
    </div>
  );
};

export default Header;
