import React, { useEffect, useState } from "react";
import "./style.css";
import Api from "./api/Api";
export const SHopCardSlider = () => {
  const [ApiData, setApiData] = useState(Api);
  const [category, setCategory] = useState("running");

    const getProduct = ()=>{
        if(category == "running") return ApiData.RunningApi;
        if(category == "sportware") return ApiData.SportswareApi;
        return [];
    };
    const CurrentApiData = getProduct();
  return (
    <>
      <div className="shopCardCategoryContainerSlider">
        <div className="shop_slider_heading">
          <p className="shopslider_heading">Stock Up & Save</p>
        </div>
        <div className="shop_slider_category_container">
          <div className="wrapper_c_btns">
            <button className="cote_btn active" onClick={()=>setCategory("running")} >running</button>
            <button className="cote_btn"onClick={()=>setCategory("sportware")}>sportsware</button>
            <button className="cote_btn">lifestyles</button>
          </div>
        </div>
        <div className="shop_slider_wrapper_slider_list">
          {CurrentApiData.map((e) => {
            return (
              <div className="shop_card" key={e.id} >
              
              </div>
            );
          })}
        </div>
      </div>
      <div className="empty"></div>
    </>
  );
};
