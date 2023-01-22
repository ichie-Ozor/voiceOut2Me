import React, { useState } from "react";
import HeroImage from "../../assets/images/comingpage/coming-soon-page-hero.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/comingpage/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Hamburger from "../Hamburger";
import "../../app.css"
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
    <div >
      <section className="w-screen">
        <header className=" h-[5.438rem] flex relative items-center justify-center bg-[#695E93] overflow-hidden">
          <img className=" absolute h-[8rem] sm:h-[9rem] -left-4 sm:left-0 lg:left-2 xl:left-8" src={Logo} alt="logo" />
          <section className="flex  justify-between items-center w-[85%] ml-4">
              <h1 className=" text-sm text-white sm:text-xl  font-bold font-OpenSand pl-14 lg:pl-10">
                VoiceOut2Me
              </h1>
            <div className="menu lg:hidden">
              <Hamburger />
            </div>
            <Link className="about-us border-[1px] border-white rounded-2xl px-6 py-1 text-lg text-white hover:border-[2px] hidden lg:flex ">
              About us
            </Link>
          </section>
        </header>

        <section className=" w-[92%] md:w-[90%] m-auto lg:mt-10 lg:mb-20  py-4 flex flex-col items-center ">
          <h1 className="mb-6 font-OpenSand font-normal text-2xl text-center md:text-[24.5px] md:text-left   lg:text-center lg:text-4xl xl:text-5xl   mt-4">
            Never deal with it alone, seek help and feel better!
          </h1>
          <p
            className="font-OpenSand font-normal md:w-[79%] md:text-sm  md:text-left  text-center  lg:text-left lg:text-[18.5px] md:ml-[80px] lg:leading-[32px]  lg:ml-16 w-[85%] m-auto xl:ml-32 xl:leading-[40px] xl:text-[26px]  xl:mt-5 min-[13360]:ml-50 "
            data-aos="fade-up"
            data-aos-duration="2000"

          >
            We have ears that are open, so it’s good not to be alright.
            VoiceOut2Me is here to guide you on the path to getting better from
            depression.
          </p>
        </section>
        <section
          className="hero-image w-screen h-[15rem] xs:h-[20rem] sm:h-[30rem] lg:h-[40rem] xl:h-[57.938rem] bg-pink-200 mt-[3rem] lg:w-[70%] m-auto"
          style={{
            background: `url(${HeroImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></section>
        <section className="subscribe-wrapper w-[90%] lg:w-[80%] m-auto mt-6 p-4 flex flex-col justify-center items-center gap-8 my-14 max-[320px]:mt-0 lg:-mt-24 xl:-mt-48">
          <h1 className="subscribe-title text-[#290C1E] font-semibold text-lg text-center lg:text-xl xl:text-2xl">
            Subscribe to our Newsletter to get full updates when the website
            launches.
          </h1>
          <form className="w-[83%]" action="#" onSubmit={submitHandler}>
            <div className="input-btn-wrapper flex flex-col gap-2 w-[100%] sm:flex-row items-center justify-center sm:ml-[20%] md:ml-[12%]">
              <input
                className="w-[95%] lg:w-[80%] border-[1px] border-[#290C1E] rounded p-2"
                type="text"
                placeholder="Email Address"
                onChange={onchangeHandler}
                value={email}
              />
              <div className="text-white w-[95%]">
                <button className="text-white bg-[#8155BA] w-[100%] sm:w-[30%] md:w-[50%]  lg:w-[52%] py-2 md:px-1 rounded font-bold font-Lato hover:opacity-70 ">
                  Notify Me
                </button>
              </div>
            </div>
          </form>
          <h1
            className=" text-xl font-bold sm:text-4xl text-[#290C1E] font-Lato lg:text-[46px] xl:text-[64px] md:mt-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            We are about to launch!!!
          </h1>
          <div></div>
        </section>
      </section>
    </div>
  );
};

export default ComingPage;
