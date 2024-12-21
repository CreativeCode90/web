import React from "react";
import "./style.css";

export const BannerOverlay = (porps) => {
  return (
    <div className="overlay">
      <img src={porps.image} alt="Overlay" />
    </div>
  );
};

export const BannerContent = (porps) => {
  return <div className="hero_ection_overlay_text">{porps.children}</div>;
};

export const BannerContentList = (props) => {
  return <div className="hero_o_list">{props.children}</div>;
};
export const Banner = (props) => {
  return <div className="HeroSection_container">{props.children}</div>;
};
