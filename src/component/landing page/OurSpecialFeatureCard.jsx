import React from "react";

const OurSpecialFeatureCard = ({ Icon, Title, Note, Button }) => {
  return (
    <>
      <div className="card w-[17.313] h-[13.5rem] border-[2px] border-[#8155BA] font-Lato">
        <section className="m-2">
          <div className="icon-title-wrapper">
            <div className="icon">{Icon}</div>
            <h1 className=" font-[600]">{Title}</h1>
          </div>
          <p className="text-[#555455] w-[17.188rem] my-[24px]">{Note}</p>
          <button className="text-sm border-[1px] border-[#BEAFC2] py-2 px-4 rounded-[4px] text-[#555455] transition-all duration-200 hover:scale-105">
            {Button}
          </button>
        </section>
      </div>
    </>
  );
};

export default OurSpecialFeatureCard;
