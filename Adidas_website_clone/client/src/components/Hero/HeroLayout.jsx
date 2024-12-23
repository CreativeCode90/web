import React from "react";
import HeroSection from "./HeroSection";
import ProductSlider from "../../widgets/productSlider/ProductSlider";
import { SHopCardSlider } from "../../widgets/shopCardsSlider/SHopCardSlider";
const HeroLayout = () => {
  return (
    <>
      <HeroSection />
      <ProductSlider/>
     <SHopCardSlider/>
    </>
  );
};

export default HeroLayout;
