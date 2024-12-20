import React from "react";
import { IoMdSearch } from "react-icons/io";
import './style.css'
const HeaderSearchbar = () => {
  return (
    <div className="headerSearchbarWidget">
      <input
        type="text"
        name="search"
        placeholder="Search"
        id="HeaderProductSearchbar"
      />
      <IoMdSearch id="search_icons" />
    </div>
  );
};

export default HeaderSearchbar;
