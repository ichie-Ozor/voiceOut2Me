import React from "react";
import { Link } from "react-router-dom";
import SubHeadHero from "../assets/images/landing page/sub-head-hero-image.svg";
import SubHeadIMage1 from "../assets/images/landing page/sub-head-image1.svg";

const SubHeading = () => {
  return (
    <>
      <section className="w-[85vw] m-auto flex justify-between mt-[4.625rem]">
        <div className="get-help w-[40%] mt-[5%]">
          <h1 className="text-[52px] text-[#290C1E] font-Lato font-normal ">
            Voice out and be heard!
          </h1>
          <div></div>
          <p
            className=" w-[24rem] font-Lato text-[#290C1E] mb-10"
          >
            We prioritize your mental wellness. Voice out, and lets help you
            move forward in the face of depression.
          </p>
          <Link to={"/getStarted"} className="chat-now bg-[#8155BA] text-white py-[17.5px] px-[49.58px] rounded hover:opacity-60">
            Get Started
          </Link>
          <img className="mt-[2.563rem]" src={SubHeadIMage1} alt="" />
        </div>
        <div
          className="image-container w-[53.67%] h-[38.063rem] bg-[#D9D9D9] "
          style={{
            background: `url(${SubHeadHero})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section>
      <hr className="w-[84vw]  ml-[6.4rem] mt-[-37px] border-[0.5px] border-[#696869]" />
    </>
  );
};

export default SubHeading;
