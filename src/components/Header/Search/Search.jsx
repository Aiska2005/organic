import React from "react";
import "./Search.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Search = ({ onClickOpen,onSearch, searchValue }) => {
  return (
    <div className="block_search">
      <div>
        <input value={searchValue} onChange={onSearch} value={searchValue} className="inputSearch" type="search" placeholder="search" />
        <div className="iconSearch">
          <BsSearch />
        </div>
      </div>
      <div className="cu-p" onClick={onClickOpen}>
        <div className="iconCart">
          <AiOutlineShoppingCart />
        </div>
        <button className="buttonCart">Cart 0</button>
      </div>
    </div>
  );
};

export default Search;
