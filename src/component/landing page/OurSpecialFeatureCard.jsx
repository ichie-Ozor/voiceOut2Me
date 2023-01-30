import React from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
AOS.init();

const OurSpecialFeatureCard = ({ Icon, Title, Note, Button,LinkPath }) => {
  return (
    <>
      {/* w-[17.313] */}
      <div className="card  h-[13.5rem] border-[2px] border-[#8155BA] font-Lato  transition-transform duraion-500 hover:-translate-y-3 mt-3">
        <section className="m-2">
          <div className="icon-title-wrapper">
            <div className="icon">{Icon}</div>
            <h1 className=" font-[600]">{Title}</h1>
          </div>
          <p className="text-[#555455] w-[17.188rem] my-[24px]">{Note}</p>
          <button className="text-sm border-[1px] border-[#BEAFC2] py-2 px-4 rounded-[4px] text-[#555455] transition-all hover:scale-105">
            <Link to={LinkPath}>{Button}</Link>
          </button>
        </section>
      </div>
    </>
  );
};

export default OurSpecialFeatureCard;
