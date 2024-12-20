import React from "react";
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import "./style.css";
import Logo from "../mainheader/Logo";
export const ResponsiveHeader = () => {
  return (
    <header className="responsiveHeader">
      <nav className="resNavbar">
        <div className="leftbar">
        <MdMenu />
          <FaRegHeart id="nav_icons" style={{fontSize:"9px"}} />
        </div>
        <div className="logobar">
          <div className="reslogoContainer">
            <svg
              className="LogoSvg"
              viewBox="100 100 50 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>
        <div className="rightbarr">
          <FaRegUser id="nav_icons" style={{fontSize:"12px"}} />
          <IoSearchSharp style={{fontSize:"12px"}} />
          <MdOutlineShoppingBag id="nav_icons" style={{fontSize:"12px"}} />
        </div>
      </nav>
    </header>
  );
};
