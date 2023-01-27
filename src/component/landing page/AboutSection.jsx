import React from "react";
import AboutHeroImage from "../../assets/images/landing page/about-us-hero-image.svg";
import LeftTriangle from "../../assets/images/landing page/left-triangle.svg";

const AboutSection = () => {
  return (
    <>
      <section className="w-[93%] ml-auto  h-[51.063rem] mt-[5rem] flex font-Lato">
        <div className="about-text-wrapper w-[54%] relative">
          <div>
            <button className="bg-[#695E93] text-white py-[40px] px-[80px] rounded text-[32px] font-bold">
              About Us
            </button>
            <span className="absolute left-[-6rem]">
              <img src={LeftTriangle} alt="left triangle" />
            </span>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-5xl text-black font-bold z-20 overflow-hidden pt-5">
                We help every individuals snap out of their <span className="text-[#695E93]">depression zone</span>
              </h1>
              <p className="text-lg w-[36.375rem] pt-10">
                VoiceOut2Me is an online platform developed to improve
                everyone’s overall mental wellness. Through virtual
                psychotherapy, we want to nip depression in the bud before it
                gets out of hand.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-[600]">Our Mission</h1>
              <p>
                Our mission is to increase the overall wellness of depressed
                people by providing the Professional Pschotherapist to serve
                their needs.
              </p>
              <button className="border-[1px] border-black rounded-lg py-2 px-4 mt-10">READ MORE</button>
            </div>
          </div>
        </div>

        <div
          className="about-hero-wrapper w-[48%] z-10"
          style={{
            background: `url(${AboutHeroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      </section>
    </>
  );
};

export default AboutSection;
