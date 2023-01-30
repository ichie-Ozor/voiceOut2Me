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
      <div className=" header-wrapper w-[15rem] md:w-[20.688rem] md:h-[5.813rem] bg-[#695E93BF] flex flex-col justify-center items-center gap-1 mt-[5rem] lg:mr-0 md:ml-[45%] lg:ml-[60%]">
        <span className="absolute right-0">
          <img className="w-[1rem] lg:w-[2rem]" src={RightRiangleImage} alt="right triangle" />
        </span>
        <h1 className="text-2xl text-white font-[600]">Our Special Features</h1>
        <p className="text-2xl text-[#EBEAEB]">Made for you</p>
      </div>
      <section className=" flex flex-col-reverse md:flex lg:flex-row gap-4">
        <div className="w-[92%] grid gap-5 grid-cols-1 sm:w-[50%] md:w-[90%] lg:w-[60%] xl:w-[52%] md:grid md:grid-cols-2 md:gap-[2rem] lg:gap-[2rem] overflow-hidden ml-0 sm:ml-[20%] md:ml-0">
          {renderOurSpecialFeature}
          {/* <div className="flex flex-col gap-[5rem]">
          <OurSpecialFeatureCard
            Icon=""
            Title="Support"
            Note="We have 24/7 live chat to attend to your needs."
            Button="Chat Now"
          />
          <OurSpecialFeatureCard
            Icon=""
            Title="Contents"
            Note="Read free contents on how to care better for your mental wellness"
            Button="Read now"
          />
        </div>
        <div className="flex flex-col gap-[5rem]">
          <OurSpecialFeatureCard
            Icon=""
            Title="Counselling"
            Note="Book a professional psychotherapist/ counsellor from the platform "
            Button="Book Session"
          />
          <OurSpecialFeatureCard
            Icon=""
            Title="Community"
            Note="Never suffer in silence, join an active community to boost your mood"
            Button="Join now"
          />
        </div> */}
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
