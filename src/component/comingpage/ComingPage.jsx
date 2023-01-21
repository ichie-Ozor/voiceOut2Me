import React, { useState } from "react";
import NavBar from "./NavBar";
import HeroImage from "../../assets/images/comingpage/coming-soon-page-hero.svg";
// import PrimaryBtn1 from "../Buttons/PrimaryBtn1";

const ComingPage = () => {
  const [email, setEmail] = useState("");
  const onchangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    alert("your email is "+email);
    setEmail("")
  };
  return (
    <div>
      <section>
        <NavBar />
      </section>
      <section className=" w-[92vw] md:w-[85vw] m-auto ">
        <h1 className="font-OpenSand font-normal text-2xl text-center md:text-2xl md:text-left p-2 lg:text-left lg:text-4xl xl:text-5xl mb-2">
          Never deal with it alone, seek help and feel better!
        </h1>
        <p className="font-OpenSand font-normal md:w-[82%] md:text-sm md:text md:ml-[5px] text-center xl:text-2xl lg:text-left lg:text-xl p-2 w-[85%] m-auto">
          We have ears that are open, so t’s good not to be alright. VoiceOut2Me
          is here to guide you on the path to getting better from depression.
        </p>
      </section>
      <section
        className="hero-image w-screen h-[15rem] xs:h-[20rem] sm:h-[30rem] lg:h-[40rem] xl:h-[57.938rem] bg-pink-200 mt-[3rem]"
        style={{
          width:"500px",
          height:"500px",
          background: `url(${HeroImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></section>
      <section className="subscribe-wrapper w-[90%] lg:w-[80%] m-auto mt-6 p-4 flex flex-col justify-center items-center gap-8 my-14 max-[320px]:mt-0">
        <h1 className="subscribe-title text-[#290C1E] font-semibold text-lg text-center lg:text-2xl">
          Subscribe to our Newsletter to get full updates when the website
          launches.
        </h1>
        <form className="w-[100%]" action="#" onSubmit={submitHandler}>
          <div className="input-btn-wrapper flex flex-col gap-2 w-[100%] sm:flex-row items-center justify-center sm:ml-[20%]">
            <input
              className="w-[95%] lg:w-[80%] border-[1px] border-[#290C1E] rounded p-2"
              type="text"
              placeholder="Email Address"
              onChange={onchangeHandler}
              value={email}
            />
            <div className="text-white w-[95%]">
              {/* <PrimaryBtn1 Name="Notify Me"  /> */}
              <button className="text-white bg-[#8155BA] w-[100%] sm:w-[30%] py-2 rounded font-bold font-Lato">Notify Me</button>
            </div>
          </div>
        </form>
        <h1 className=" text-lgfont-bold sm:4xl lg:text-4xl text-[#290C1E] font-Lato">We are about to launch!!!</h1>
      </section>
    </div>
  );
};

export default ComingPage;
