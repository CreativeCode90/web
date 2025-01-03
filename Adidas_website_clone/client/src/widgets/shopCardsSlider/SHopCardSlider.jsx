import React, { useRef, useState } from "react";
import "./style.css";
import Api from "./api/Api";
import { FaRegHeart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
export const SHopCardSlider = () => {
  const [ApiData, setApiData] = useState(Api);
  const [category, setCategory] = useState("running");

  const getProduct = () => {
    if (category == "running") return ApiData.RunningApi;
    if (category == "sportware") return ApiData.SportswareApi;
    return [];
  };
  const sliderRef = useRef(null);
  const CurrentApiData = getProduct();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    setLeftPrev(true);
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <div className="shopCardCategoryContainerSlider">
        <div className="shop_slider_heading">
          <p className="shopslider_heading">Stock Up & Save</p>
        </div>
        <div className="shop_slider_category_container">
          <div className="wrapper_c_btns">
            <button
              className="cote_btn active"
              onClick={() => setCategory("running")}
            >
              running
            </button>
            <button
              className="cote_btn"
              onClick={() => setCategory("sportware")}
            >
              sportsware
            </button>
            <button className="cote_btn">lifestyles</button>
          </div>
        </div>
        <button className="navi_slider left_prev" onClick={scrollLeft}>
          <GoArrowLeft />
        </button>
        <div className="shop_slider_wrapper_slider_list" ref={sliderRef}>
          {CurrentApiData.map((e) => {
            return (
              <div className="shop_card" key={e.id}>
                <div className="shop_product_card_slider_">
                  <div className="shop_product_card_img_">
                    <div className="product_img_wrapper">
                      <img
                        src={e.img}
                        id="shop_product_card_img_id"
                        alt="cardProduct"
                      />
                    </div>
                    <div className="like_wrappe">
                      <FaRegHeart id="Like" />
                    </div>
                    <div className="price_wrapper">
                      <div className="discount">{e.discount}%</div>
                      <div className="price">
                        <div className=" price_co price_cut">
                          <MdCurrencyRupee />
                          {e.price}
                          <div className="cutline">
                            <div className="_line_cut"></div>
                          </div>
                        </div>
                        <div className=" price_co sals_price">
                          <MdCurrencyRupee />
                          {e.salesPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shop_product_card_title_">
                    {e.title}
                    <p>Performance </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="navi_slider right_prev" onClick={scrollRight}>
          <FaArrowRightLong />
        </button>
      </div>
     
    </>
  );
};
