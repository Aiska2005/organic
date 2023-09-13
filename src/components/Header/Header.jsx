import React from "react";
import NavLink from "./NavLink/NavLink";
import "./Header.css";
import Search from "./Search/Search";

const Header = ({onClickOpen}) => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="blockLogo">
            <img className="logo" src="/public/assets/header/Logo.png" alt="" />
            <h2>Organick</h2>
          </div>
          <NavLink />
          <Search onClickOpen ={onClickOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
