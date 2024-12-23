import React from "react";
import {
  Banner,
  BannerContent,
  BannerContentList,
  BannerOverlay,
} from "../../widgets/banner/Banner";
import bannerImg from "/public/pic/banner2.jpg";
import { MdArrowRightAlt } from "react-icons/md";
const HeroBanner = () => {
  return (
    <Banner>
      <BannerOverlay image={bannerImg} />
      <BannerContent>
        <BannerContentList>
          <div className="offer_sale">
            <div className="sale_tag">
            WEAR YOUR STRIPES
                </div>
            <div className="sals_offer_tab_p">
            All New adidas Team India ODI Jersey
            </div>
          </div>
          <div className="shop_btnlist">
            <button className="shop_btn">
              shop man <MdArrowRightAlt id="hero_icon" />
            </button>
           
          </div>
        </BannerContentList>
      </BannerContent>
    </Banner>
  );
};

export default HeroBanner;
