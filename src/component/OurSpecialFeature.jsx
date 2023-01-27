import React from "react";
import OurSpecialFeatureCard from "./landing page/OurSpecialFeatureCard";
import SpecialFeatures from "../util/ourSpecialFeatureItems.js";

const OurSpecialFeature = () => {
  const renderOurSpecialFeature = SpecialFeatures.map((feature) => {
    return (
      <div key={feature.id}>
        <OurSpecialFeatureCard
          Icon={feature.icon}
          Title={feature.title}
          Note={feature.note}
          Button={feature.button}
        />
      </div>
    );
  });
  return (
    <div className="w-[83vw] h-[40.375rem] m-auto flex">
      <section className="w-[58%] flex gap-[10rem] mt-[10rem]">
        {/* {renderOurSpecialFeature} */}
        <div className="flex flex-col gap-[10rem]">
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
        <div className="flex flex-col gap-[10rem]">
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
        </div>
      </section>
      <section>
        <div className="w-[20.688rem] h-[5.813rem] bg-[#695E93] flex flex-col justify-center items-center gap-1 mt-[5rem]">
          <h1 className="text-2xl text-white font-[600]">Our Special Features</h1>
          <p className="text-2xl text-[#EBEAEB]">Made for you</p>
        </div>
        <p className="w-[19.625rem] mt-[3rem]">It’s okay not to be okay. VoiceOut2Me is out here to lead you on the road to recovery.</p>
      </section>
    </div>
  );
};

export default OurSpecialFeature;
