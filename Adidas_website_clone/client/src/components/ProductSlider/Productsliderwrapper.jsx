import React from "react";
import "./style.css";
import { ProductSlider, Slider_Luncher, SliderHeading } from "../../widgets/productSlider/ProductSlider";
const Productsliderwrapper = () => {
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
  return (
    <ProductSlider>
        <SliderHeading title={"Steals of the Season"} />
        <Slider_Luncher api={api} />
    </ProductSlider>
  );
};

export default Productsliderwrapper;

