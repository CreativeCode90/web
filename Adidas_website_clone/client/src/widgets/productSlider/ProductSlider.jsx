import React, { useRef, useState } from "react";
import "./style.css";

const ProductSlider = () => {
  const api = [
    {
      id: 1,
      url: "/public/product/img1.jpg",
      title: "RUNNING SHOES at MIN. 40% OFF",
    },
    {
      id: 2,
      url: "/public/product/img2.jpg",
      title: "RUNNING SHOES at MIN. 40% OFF",
    },
    {
      id: 3,
      url: "/public/product/img3.jpg",
      title: "RUNNING SHOES at MIN. 40% OFF",
    },
    {
      id: 4,
      url: "/public/product/img4.jpg",
      title: "RUNNING SHOES at MIN. 40% OFF",
    },
    {
      id: 5,
      url: "/public/product/img5.jpg",
      title: "RUNNING SHOES at MIN. 40% OFF",
    },
    {
      id: 6,
      url: "/public/product/img5.jpg",
      title: "RUNNING SHOES at MIN. 40% OFF",
    },
  ];

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
    <div className="Product_slider">
      <div className="wrapper_Slider">
        <div className="slider_headingbox">
          <p className="slider_heading">Steals of the Season</p>
        </div>
        <div className="slider_box_list">
          <button className="nav_button prev" onClick={scrollLeft}>
            &#10094;
          </button>
          <div className="slider_list" ref={sliderRef}>
            {api.map((item) => (
              <div className="slider_card" key={item.id}>
                <div className="slider_img">
                  <img src={item.url} alt={item.title} />
                </div>
                <div className="slider_title">{item.title}</div>
              </div>
            ))}
          </div>
          <button className="nav_button next" onClick={scrollRight}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
