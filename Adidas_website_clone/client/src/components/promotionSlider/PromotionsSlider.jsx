import React from "react";
import { ProductSlider, Slider_Luncher, SliderHeading } from "../../widgets/productSlider/ProductSlider";

const PromotionsSlider = () => {
  const api = [
    {
      id: 1,
      url: "/public/promotion/img1.gif",
      title: "Personalize Your Football JerseyF",
    },
    {
      id: 2,
      url: "/public/promotion/img2.jpg",
      title: "Women's EURO25™ Pro Ball",
    },
    {
      id: 3,
      url: "/public/promotion/img3.jpg",
      title: "FEAR OF GOD ATHLETICS",
    },
    {
      id: 4,
      url: "/public/promotion/img4.jpg",
      title: "Participate and Win",
    },
    {
      id: 5,
      url: "/public/promotion/img5.jpg",
      title: "Participate and Win",
    },
    {
      id: 6,
      url: "/public/promotion/img6.jpg",
      title: "Participate and Win",
    },
    {
      id: 7,
      url: "/public/promotion/img7.jpg",
      title: "Participate and Win",
    },
    {
      id: 8,
      url: "/public/promotion/img8.jpg",
      title: "Participate and Win",
    },
    {
      id: 9,
      url: "/public/promotion/img9.jpg",
      title: "Participate and Win",
    },
    {
      id: 10,
      url: "/public/promotion/img10.jpg",
      title: "Participate and Win",
    },
  ];
  return (
    <ProductSlider>
        <SliderHeading title="WHAT'S HOT?" />
        <Slider_Luncher api={api} >
       
        </Slider_Luncher>
    </ProductSlider>
  );
};

export default PromotionsSlider;
