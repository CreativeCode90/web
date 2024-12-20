import React from "react";
import { MdClose } from "react-icons/md";
import OfferList from "./OfferList";
const OfferxBar = (props) => {
  return (
    <div className="toggleOfferBar" style={props.openAction ? {
        transform: "translateY(0%)"
    } : {
         transform: "translateY(-100%)"
    } } >
      <div className="topRow_to">
        <div className="closeBar" onClick={() => props.setOpenaction(false)} >
          <MdClose id="black_icons"  />
        </div>
      </div>
      <div className="offer_list_to">
        {OfferList.map((e) => {
          return (
            <div className="offerContainer" key={e.id}>
              <h3 id="OfferHeading">{e.heading}</h3>
              <p id="offerPera">{e.data}</p>
              <div className="offerLink">
                {e.offer_link.map((v) => {
                  return (
                    <p id="Offerlink" key={v.id}>
                      {v.link}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OfferxBar;
