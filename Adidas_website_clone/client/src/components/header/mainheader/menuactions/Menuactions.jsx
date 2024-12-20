import React from "react";
import HeaderSearchbar from "../../../../widgets/headerSearchbarwidget/HeaderSearchbar";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
const Menuactions = () => {
  return (
    <div className="navActionContainer">
      <HeaderSearchbar />
    <div className="actionIcons">
    <FaRegUser id="nav_icons" />
      <FaRegHeart id="nav_icons" />
      <MdOutlineShoppingBag id="nav_icons" />
    </div>
    </div>
  );
};

export default Menuactions;
