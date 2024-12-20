import React from "react";
import "./style.css";
import heroOverlay from "/public/pic/mh3_3114f2894c.jpg";
import { MdArrowRightAlt } from "react-icons/md";
const HeroSection = () => {
  return (
    <div className="HeroSection_container">
      <div className="overlay">
        <img src={heroOverlay} alt="Overlay" />
      </div>

      <div className="hero_ection_overlay_text">
        <div className="hero_o_list">
          <div className="offer_sale">
            <div className="sale_tag">FLAT 30% OFF</div>
            <div className="sals_offer_tab_p">
              Save an extra 15% on 4499 INR and above!
            </div>
          </div>
          <div className="shop_btnlist">
            <button className="shop_btn">
              shop man <MdArrowRightAlt id="hero_icon" />
            </button>
            <button className="shop_btn">
              shop man <MdArrowRightAlt id="hero_icon" />
            </button>
            <button className="shop_btn">
              shop man <MdArrowRightAlt id="hero_icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
