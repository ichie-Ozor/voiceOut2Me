import React from "react";
import { Link } from "react-router-dom";
import SubHeadHero from "../assets/images/landing page/sub-head-hero-image.svg";
import SubHeadIMage1 from "../assets/images/landing page/sub-head-image1.svg";

const SubHeading = () => {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row w-[85vw] lg:w-[92%] xl:w-[85vw] m-auto  justify-between mt-[4.625rem] ">
        <div className="flex flex-col items-center md:flex-none md:items-start  md:w-[40%] mt-[-5%] lg:mt-[5%]">
          <h1 className="text-4xl leading-[3rem] lg:text-[52px] lg:leading-[4rem] text-[#290C1E] font-Lato font-normal sm:mt-[3rem] md:mt-0">
            Voice out and be heard!
          </h1>
          <div></div>
          <p
            className=" md:w-[24rem]  font-Lato text-[#290C1E] mb-10 mt-5 "
          >
            We prioritize your mental wellness. Voice out, and lets help you
            move forward in the face of depression.
          </p>
          <Link to={"/getStarted"} className="chat-now bg-[#8155BA] text-white py-[17.5px] px-[49.58px] rounded transition-all hover:opacity-70">
            Get Started
          </Link>
          <img className=" hidden lg:flex  md:mt-[2rem] md:w-[10rem] xl:w-[22rem] xl:mt-[5rem]" src={SubHeadIMage1} alt="subheaderimage" />
        </div>
        <div
          className="h-[20rem] w-[90%] sm:w-[12rem] sm:h-[12rem] md:w-[40%] lg:w-[53.67%] lg:h-[38.063rem] bg-[#D9D9D9] ml-4 sm:ml-[25%] md:ml-0 sm:mt-[-3rem] lg:mt-0"
          style={{
            background: `url(${SubHeadHero})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section>
      <hr className="hidden lg:flex w-[84vw]  ml-[6.8rem] md:mt-[-10.3rem] border-[0.5px] border-[#696869] lg:mt-[-10.1rem] xl:mt-[-0.5rem]" />
    </>
  );
};

export default SubHeading;
