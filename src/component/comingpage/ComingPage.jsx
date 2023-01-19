import React, { useState } from "react";
import NavBar from "./NavBar";
import HeroImage from "../../assets/images/comingpage/coming-soon-page-hero.svg";
import PrimaryBtn1 from "../Buttons/PrimaryBtn1";

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
      <section className="w-[85vw] m-auto ">
        <h1 className="font-OpenSand font-normal text-[48px] p-2">
          Never deal with it alone, seek help and feel better!
        </h1>
        <p className="font-OpenSand font-normal text-[24px] p-2 w-[85%] m-auto">
          We have ears that are open, so t’s good not to be alright. VoiceOut2Me
          is here to guide you on the path to getting better from depression.
        </p>
      </section>
      <section
        className="hero-image w-screen h-[57.938rem] bg-pink-200 mt-[3rem]"
        style={{
          background: `url(${HeroImage})`,
          backgroundPosition: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></section>
      <section className="subscribe-wrapper w-[80%] m-auto p-4 flex flex-col justify-center items-center gap-6 my-10">
        <h1 className="subscribe-title text-[#290C1E] font-semibold text-2xl">
          Subscribe to our Newsletter to get full updates when the website
          launches.
        </h1>
        <form className="w-[100%]" action="#" onSubmit={submitHandler}>
          <div className="input-btn-wrapper flex gap-2 w-[100%] items-center justify-center">
            <input
              className="w-[40%] border-[1px] border-[#290C1E] rounded p-2"
              type="text"
              placeholder="Email Address"
              onChange={onchangeHandler}
              value={email}
            />
            <div className="text-white">
              <PrimaryBtn1 Name="Notify Me" />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ComingPage;
