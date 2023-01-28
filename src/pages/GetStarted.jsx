import React from "react";
import { Link } from "react-router-dom";
import GetStartedImage1 from "../assets/images/get-started-image1.svg";
import GetStartedImage2 from "../assets/images/get-started-image2.svg";
import Logo from "../assets/images/logo.svg";

const GetStarted = () => {
  return (
    <>
      <div className="w-full h-[42rem]  relative">
        <img
          className="absolute w-[10rem]"
          src={GetStartedImage2}
          alt="get started image 1"
        />

        <header className="flex justify-between  w-[80%] m-auto h-[5rem] items-center pt-8">
          <img className="h-[10rem] " src={Logo} alt="logo" />
          <h1 className=" text-[32px] w-[10.25ren] border-b-2 border-[#696869]">Get Started</h1>
        </header>
        <main className="w-full flex flex-col items-center gap-10">
          <section className="flex flex-col justify-center items-center w-[40%] ">
            <h1 className="text-[32px] text-[#281C2D] w-[9rem]">Welcome!</h1>
            <h1 className="text-[64px] text-[#534B75] font-extrabold">VoiceOut2Me</h1>
            <p className="text-lg text-center">
              VoiceOut2Me is an online platform developed to improve everyone’s
              overall mental wellness. Through virtual psychotherapy, we want to
              nip depression in the bud before it gets out of hand.
            </p>
          </section>
          <section className="flex flex-col w-[60%] gap-2">
            <div className="flex flex-col items-center justify-center">

            <button className="py-4 w-[80%] text-white bg-[#695E93] rounded-[20px] font-bold text-[32px]">Are you a couselor?</button>
            <p className="text-2xl text-[#5A3788] font-[600]">or</p>
            <button className="py-4 w-[80%] text-[32px] text-[#1C1927] font-bold border-[1px] border-[#5A3788] rounded-[20px]">User</button>
            <Link to={"/"} className="text-[#694976] border-b-2 w-[8.438rem] border-[#694976] py-2 hover:opacity-60 ml-[-60%] mt-10">Back to Homepage</Link>
            </div>
          </section>
        </main>

        <img
          className="absolute bottom-0 right-0 w-[10rem]"
          src={GetStartedImage1}
          alt="get started image 1"
        />
      </div>
    </>
  );
};

export default GetStarted;
