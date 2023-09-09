import React from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <input type="search" placeholder="search" />
      <BsSearch />
      <button>Cart 0</button>
    </div>
  );
};

export default Search;
