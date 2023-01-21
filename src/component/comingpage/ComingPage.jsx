import React, { useState } from "react";
import HeroImage from "../../assets/images/comingpage/coming-soon-page-hero.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/comingpage/logo.svg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Hamburger from "../Hamburger";
// ..
AOS.init();

const ComingPage = () => {
  const [email, setEmail] = useState("");
  const onchangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    alert("your email is " + email);
    setEmail("");
  };
  return (
    <div>
      <header className="w-[90vw] m-auto mb-6 lg:w-[70vw] h-[10vh] ">
        <section className="flex justify-between  items-center mt-4 bg-[#8155BA] p-2 h-[10vh] sm:h-[9vw]">
          <div className="logo-title flex justify-center items-center">
            <div className="image overflow-hidden -ml-4 ">
              <img className=" w-24 sm:w-28 p-1" src={Logo} alt="logo" />
            </div>

            <h1 className=" text-sm text-white sm:text-xl -ml-5  font-bold font-OpenSand">
              VoiceOut2Me
            </h1>
          </div>
          <div className="menu lg:hidden">
            <Hamburger/>
          </div>
          <Link className="about-us border-[1px] border-white rounded-2xl px-6 py-1 text-lg text-white hover:border-[2px] hidden lg:flex ">
            About us
          </Link>
        </section>
      </header>

      <section className=" w-[92vw] md:w-[85vw] m-auto lg:mb-16">
        <h1 className="font-OpenSand font-normal text-2xl text-center md:text-2xl md:text-left p-2 lg:text-center lg:text-3xl xl:text-4xl">
          Never deal with it alone, seek help and feel better!
          <Hamburger/>

        </h1>
        <p
          className="font-OpenSand font-normal md:w-[82%] md:text-sm  md:text-left md:-mt-6 text-center  lg:text-left lg:text-lg lg:px-[3rem] xl:px-[8rem] w-[85%] m-auto md:ml-2 lg:ml-10 xl:ml-[4rem]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          We have ears that are open, so it’s good not to be alright.
          VoiceOut2Me is here to guide you on the path to getting better from
          depression.
        </p>
      </section>
      <section
        className="hero-image w-screen h-[15rem] xs:h-[20rem] sm:h-[30rem] lg:h-[40rem] xl:h-[57.938rem] bg-pink-200 mt-[3rem] lg:w-[60vw] m-auto"
        style={{
          background: `url(${HeroImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></section>
      <section className="subscribe-wrapper w-[90%] lg:w-[80%] m-auto mt-6 p-4 flex flex-col justify-center items-center gap-8 my-14 max-[320px]:mt-0 lg:-mt-36 xl:-mt-80">
        <h1
          className="subscribe-title text-[#290C1E] font-semibold text-lg text-center lg:text-2xl"
        >
          Subscribe to our Newsletter to get full updates when the website
          launches.
        </h1>
        <form className="w-[100%]" action="#" onSubmit={submitHandler}>
          <div className="input-btn-wrapper flex flex-col gap-2 w-[100%] sm:flex-row items-center justify-center sm:ml-[20%] ">
            <input
              className="w-[95%] lg:w-[80%] border-[1px] border-[#290C1E] rounded p-2"
              type="text"
              placeholder="Email Address"
              onChange={onchangeHandler}
              value={email}
            />
            <div className="text-white w-[95%]">
              <button className="text-white bg-[#8155BA] w-[100%] sm:w-[30%] py-2 rounded font-bold font-Lato hover:opacity-70">
                Notify Me
              </button>
            </div>
          </div>
        </form>
        <h1
          className=" text-lg font-bold sm:text-4xl text-[#290C1E] font-Lato"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          We are about to launch!!!
        </h1>
        <div></div>
      </section>
    </div>
  );
};

export default ComingPage;
