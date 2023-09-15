import React from "react";
import NavLink from "./NavLink/NavLink";
import "./Header.css";
import Search from "./Search/Search";

const Header = ({onClickOpen, onSearch, searchValue}) => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="blockLogo">
            <img className="logo" src="/public/assets/header/Logo.png" alt="" />
            <h2>Organick</h2>
          </div>
          <NavLink />
          <Search searchValue={searchValue} onSearch={onSearch} onClickOpen ={onClickOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
