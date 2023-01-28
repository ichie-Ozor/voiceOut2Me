import React from "react";
import AboutHeroImage from "../../assets/images/landing page/about-us-hero-image.svg";
import LeftTriangle from "../../assets/images/landing page/left-triangle.svg";

const AboutSection = () => {
  return (
    <>
      <section className="w-[93%] ml-auto  mt-[5rem] font-Lato">
      <div className="flex  items-center mb-[8rem]">
            <h1 className="bg-[#695E93] text-white  text-[32px] font-bold w-[15rem] lg:w-[18.375rem] h-[5.813rem]  flex justify-center items-center">
              About Us
            </h1>
            <span className="absolute left-0">
              <img className="w-[1rem] lg:w[2rem]" src={LeftTriangle} alt="left triangle" />
            </span>
          </div>
<section className="flex flex-col-reverse lg:flex-row lg:mt-[-9rem]">

        <div className="about-text-wrapper lg:w-[54%] relative ">
          <div className="flex flex-col gap-10 md:w-[35rem] lg:w-[]">
            <div>
              <h1 className=" text-xl md:text-2xl lg:text-[40px] lg:leading-[3rem]  text-black font-bold  overflow-hidden pt-[3rem]">
                We help every individuals snap out of their <span className="text-[#695E93]">depression zone</span>
              </h1>
              <p className="lg:text-lg lg:w-[36.375rem] pt-10">
                VoiceOut2Me is an online platform developed to improve
                everyone’s overall mental wellness. Through virtual
                psychotherapy, we want to nip depression in the bud before it
                gets out of hand.
              </p>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-[600]">Our Mission</h1>
              <p className="lg:w-[35.75rem]">
                Our mission is to increase the overall wellness of depressed
                people by providing the Professional Pschotherapist to serve
                their needs.
              </p>
              <button className="border-[1px] border-black rounded-lg py-2 px-4 mt-10 transition-all  hover:scale-105">READ MORE</button>
            </div>
          </div>
        </div>

        <div
          className="about-hero-wrapper w-[90%] h-[20rem] md:ml-[20%] md:w-[50%]  lg:w-[48%]  lg:h-[45rem] lg:ml-0 mt-[-5rem]"
          style={{
            background: `url(${AboutHeroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
</section>
      </section>
    </>
  );
};

export default AboutSection;
