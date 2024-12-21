import React from "react";
// import "./style.css";
import heroOverlay from "/public/pic/mh3_3114f2894c.jpg";
import { MdArrowRightAlt } from "react-icons/md";
import {
  Banner,
  BannerContent,
  BannerContentList,
  BannerOverlay,
} from "../../widgets/banner/Banner";
const HeroSection = () => {
  return (
    <Banner>
      <BannerOverlay image={heroOverlay} />
      <BannerContent>
        <BannerContentList>
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
        </BannerContentList>
      </BannerContent>
    </Banner>
  );
};

export default HeroSection;
