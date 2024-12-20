import React, { useEffect, useState } from "react";
import "./style.css";
import { IoIosArrowDown } from "react-icons/io";
import OfferxBar from "./OfferxBar";

const OfferHeaderBar = () => {
    const [openOfferBar , setOpenOfferbar] = useState(false);
  return (
    <div className="offerHeaderBarContainer" >
      <OfferxBar  openAction={openOfferBar} setOpenaction={setOpenOfferbar} />
      <div className="offerBAr">
        <div className="offerWraper"  onClick={()=>setOpenOfferbar(!openOfferBar)} >
          <p className="offer_list"></p>
          <IoIosArrowDown id="white_Icon" />
        </div>
      </div>
    </div>
  );
};

export default OfferHeaderBar;
