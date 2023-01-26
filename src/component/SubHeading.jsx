import React from "react";
import SubHeadHero from "../assets/images/landing page/sub-head-hero-image.svg";
import SubHeadIMage1 from "../assets/images/landing page/sub-head-image1.svg";

const SubHeading = () => {
  return (
    <>
      <section className="w-[83vw] m-auto flex justify-between mt-[4.625rem]">
        <div className="get-help w-[40%] mt-[5%]">
          <h1 className="text-[52px] text-[#290C1E] font-Lato font-normal p-2">
            Voice out and be heard!
          </h1>
          <p className=" w-[25rem] font-Lato text-[#290C1E]">
            We prioritize your mental wellness. Voice out, and lets help you
            move forward in the face of depression.
          </p>
          <button className="chat-now bg-[#8155BA] text-white py-[17.5px] px-[49.58px] rounded mt-[40px]">
            Get Started
          </button>
          <img className="mt-[2.563rem]" src={SubHeadIMage1} alt="" />
        </div>
        <div
          className="image-container w-[53.67%] h-[38.063rem] bg-[#D9D9D9] "
          style={{
            background: `url(${SubHeadHero})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
        </div>
      </section>
      <hr className="w-[83vw]  ml-[6.8rem] -mt-6 border-[0.5px] border-[#696869]"/>
    </>
  );
};

export default SubHeading;
