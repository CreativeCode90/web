import React, { useRef, useState } from "react";
import "./style.css";

export const SliderHeading = (props) => {
  return (
    <>
      <div className="slider_headingbox">
        <p className="slider_heading">{props.title}</p>
      </div>
    </>
  );
};

export const Slider_Luncher = (props) => {
  const sliderRef = useRef(null);
  const [leftPrev, setLeftPrev] = useState(false);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    setLeftPrev(true);
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <div className="slider_box_list">
        <button className="nav_button prev" onClick={scrollLeft}>
          &#10094;
        </button>
        <div className="slider_list" ref={sliderRef}>
          {props.api.map((item) => (
            <div className="slider_card" key={item.id}>
              <div className="slider_img">
                <img src={item.url} alt={item.title} />
              </div>
              <div className="slider_title">{item.title}</div>
              {props.children}
            </div>
          ))}
        </div>
        <button className="nav_button next" onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </>
  );
};
export const ProductSlider = (props) => {
  return (
    <div className="Product_slider">
      <div className="wrapper_Slider">
        {/* heading */}
        {/* slider  */}
        {props.children}
      </div>
    </div>
  );
};
