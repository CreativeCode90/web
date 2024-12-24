import React from "react";
import HeroSection from "./HeroSection";
import { SHopCardSlider } from "../../widgets/shopCardsSlider/SHopCardSlider";
import HeroBanner from "./HeroBanner";
import Productsliderwrapper from "../ProductSlider/Productsliderwrapper";
import PromotionsSlider from "../promotionSlider/PromotionsSlider";
import About from "../about/About";
import Join from "../join/Join";
const HeroLayout = () => {
  return (
    <>
      <HeroSection />
      <Productsliderwrapper />
      <SHopCardSlider />
      <HeroBanner />
      <PromotionsSlider />
      <About/>
      <Join/>
    </>
  );
};

export default HeroLayout;
