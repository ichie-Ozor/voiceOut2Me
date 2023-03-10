import React from "react";
import OurSpecialFeatureCard from "./landing page/OurSpecialFeatureCard";
import SpecialFeatures from "../util/ourSpecialFeatureItems.js";
import RightRiangleImage from "../assets/images/landing page/right-triangle.svg";

const OurSpecialFeature = () => {
  const renderOurSpecialFeature = SpecialFeatures.map((feature) => {
    return (
      <div key={feature.id}>
        <OurSpecialFeatureCard
          Icon={feature.icon}
          Title={feature.title}
          Note={feature.note}
          Button={feature.button}
          LinkPath={feature.link}
        />
      </div>
    );
  });
  return (
    <div className="w-[92vw] ml-auto lg:w-[95vw] xl:w-[92vw]">
      <div className="  header-wrapper w-[16.5rem] md:w-[20.688rem] md:h-[5.813rem] bg-[#695E93BF] flex flex-col justify-center items-center gap-[2px] mt-[5rem] lg:mr-0 md:ml-[45%] lg:ml-[60%]">
        <span className="absolute right-0">
          <img className="w-[1rem] lg:w-[2rem]" src={RightRiangleImage} alt="right triangle" />
        </span>
        <h1 className="text-2xl text-white font-[600] mt-3 ">Our Special Features</h1>
        <p className="text-2xl text-[#EBEAEB] mb-3">Made for you</p>
      </div>
      <section className=" flex flex-col-reverse md:flex lg:flex-row gap-4">
        <div className="w-[92%] grid gap-5 grid-cols-1 sm:w-[50%] md:w-[90%] lg:w-[60%] xl:w-[52%] md:grid md:grid-cols-2 md:gap-x-[3rem] lg:gap-x-[3rem] overflow-hidden ml-0 sm:ml-[20%] md:ml-0">
          {renderOurSpecialFeature}
        </div>
        <section className="w-[48%]  md:w-[80%] lg:w-[38%] p-4 mt-[2rem]">
          <p
            className=" w-[16rem] text-center sm:w-[30rem] sm:ml-[20%] md:ml-0 md:text-left md:w-[30rem] lg:w-[19.625rem]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            It’s okay not to be okay. VoiceOut2Me is out here to lead you on the
            road to recovery.
          </p>
          <div></div>
        </section>
      </section>
    </div>
  );
};

export default OurSpecialFeature;
