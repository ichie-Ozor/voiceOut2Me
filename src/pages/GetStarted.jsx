import React from "react";
import { Link } from "react-router-dom";
import GetStartedImage1 from "../assets/images/get-started-image1.svg";
import GetStartedImage2 from "../assets/images/get-started-image2.svg";
import Logo from "../assets/images/logo.svg";

const GetStarted = () => {
  return (
    <>
      <div className="w-full  relative">
        <img
          className=" absolute w-[2rem] md:flex lg:w-[10rem]"
          src={GetStartedImage2}
          alt="getstartedimage1"
        />

        <header className="w-[80%] flex justify-between  m-auto h-[5rem] items-center pt-8 mb-[2rem]">
          <img className=" ml-[-3rem] lg:ml-0 h-[8rem] sm:h-[10rem] " src={Logo} alt="logo" />
          <h1 className=" text-lg  md:text-[32px] md:w-[10.25ren] border-b-2 border-[#696869]">Get Started</h1>
        </header>
        <main className="w-full flex flex-col items-center gap-10">
          <section className="  flex flex-col gap-5 lg:gap-8 justify-center items-center lg:w-[40%] ">
            <h1 className=" text-xl lg:text-[32px] text-[#281C2D] lg:w-[9rem]">Welcome!</h1>
            <h1 className=" text-4xl lg:text-[64px] text-[#534B75] font-extrabold">VoiceOut2Me</h1>
            <p className=" w-[18.5rem] sm:w-[30rem] text-center text-sm lg:w-[40rem] lg:text-lg sm:text-center">
              VoiceOut2Me is an online platform developed to improve everyone’s
              overall mental wellness. Through virtual psychotherapy, we want to
              nip depression in the bud before it gets out of hand.
            </p>
          </section>
          <section className="w-full flex flex-col lg:w-[60%] gap-2">
            <div className="flex flex-col items-center justify-center">

            <Link className="  py-4 w-[80%] text-white bg-[#695E93] rounded-[20px] font-bold lg:text-[32px] text-center transition-all hover:opacity-70">Are you a couselor?</Link>
            <p className="text-2xl text-[#5A3788] font-[600]">or</p>
            <Link to={"/loginuser"} className="py-4 w-[80%]  lg:text-[32px] text-[#1C1927] font-bold border-[1px] border-[#5A3788] rounded-[20px] text-center transition-all hover:scale-105">User</Link>
            <Link to={"/"} className="text-[#694976] border-b-2 lg:w-[8.438rem] border-[#694976] py-2 hover:opacity-60 lg:ml-[-60%] mt-10">Back to Homepage</Link>
            </div>
          </section>
        </main>

        <img
          className=" w-[2rem] md:flex absolute bottom-[-10rem] right-0 md:w-[10rem]"
          src={GetStartedImage1}
          alt="getstartedimage1"
        />
      </div>
    </>
  );
};

export default GetStarted;
