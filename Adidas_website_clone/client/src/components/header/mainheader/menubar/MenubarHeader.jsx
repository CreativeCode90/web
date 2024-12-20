import React from "react";
import './style.css';
const MenubarHeader = () => {
  return (
    <div className="menuLinkContainer">
      <p className="menuLink bold_link">MEN</p>
      <p className="menuLink bold_link">woMEN</p>
      <p className="menuLink light_link">SPORTS</p>
      <p className="menuLink light_link">LIFESTYLES</p>
      <p className="menuLink normal_link">OUTLET</p>
      <p className="menuLink red_link" >END OF SEASON SALS</p>
    </div>
  );
};

export default MenubarHeader;
