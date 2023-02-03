import React from "react";
import GoogleLogo from "../assets/images/google-logo.svg";
import GetStartedImage2 from "../assets/images/get-started-image2.svg";

import FacebookLogo from "../assets/images/facebook-logo.svg";
import CounselorSignupIMage from "../assets/images/counselor-signup-image.svg";
import EyeLogo from "../assets/images/eye-logo.svg";
import { Link } from "react-router-dom";
import { schemaSignUpCounselor } from "../util/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const SignUpCounselor = () => {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onsubmit",
    criticalMode: "all",
    revalidateMode: "onchange",

    resolver: yupResolver(schemaSignUpCounselor),
  });

  return (
    <>
      <div className="w-full h-full relative font-Lato">
        <img
          className="w-[2rem] absolute lg:w-[10rem]"
          src={GetStartedImage2}
          alt="getstartedimage1"
        />

        <main className="flex flex-col lg:flex-row ">
          {/* Hero section */}
          <section className=" w-full lg:w-[50%] flex flex-col items-center relative">
            <div className="absolute w-full flex justify-center items-center z-20 top-[10%] md:top-0 lg:top-[15%]">

            <p className="    lg:text-left w-[75%] lg:w-[75%]  xl:w-[65%] p-2 text-center font-Lato  text-[#281C2D] md:my-[4rem]">
              Thank you for being our unsung hero! Sign up to provide
              counselling solutions.
            </p>
            </div>

            <div
              className="w-[15rem] h-[15rem] md:w-[22rem] md:h-[30rem] lg:w-[25.25rem] min-[532px]:mt-[25%] xl:w-[40.25rem] lg:h-[30rem] xl:h-[35rem] relative mb-[5rem] mt-[53%] md:mt-[20%] lg:mt-[60%] xl:mt-[40%]"
              style={{
                background: `url(${CounselorSignupIMage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </section>
          {/* Form section */}
          <section className="w-full lg:w-[50%] ml-[0.3rem] md:ml-[1rem] lg:ml-[-5%] mt-[-20%] md:mt-[-25%] min-[532px]:mt-[-15%] lg:mt-0">
            {/* Header */}
            <header className="flex justify-center items-center font-Lato text-[32px] py-[2rem] lg:mt-[5%]">
              <h1 className=" text-[#8155BA] font-bold">Sign Up</h1>
            </header>
            <form
              className=" w-full lg:w-[100%] m-auto "
              action="#"
              onSubmit={handleSubmit()}
            >
              {/* form sub section */}
<div className="flex justify-center items-center flex-col ml-[5%]">
  
              {/* input section without the checkbox */}
              <section className="w-[90%] lg:w-full m-auto [&_Input]:w-[90%]">
                <div className="flex relative mb-[1rem] flex-col">
                  <label className="" htmlFor="fullName">
                    Full Name:
                  </label>
                  <input
                    className="border-b-[2px] p-2 border-black"
                    type="text"
                    {...register("fullName")}
                    name="fullName"
                    id="fullName"
                  />
                </div>
                <div className="flex relative mb-[1rem] flex-col">
                  <label className="" htmlFor="username">
                    Username:
                  </label>
                  <input
                    className="border-b-[2px] p-2   border-black"
                    type="text"
                    {...register("Username")}
                    name="Username"
                    id="Username"
                  />
                </div>
                <div className="flex relative mb-[1rem] flex-col">
                  <label className="" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="border-b-[2px] p-2   border-black"
                    type="text"
                    {...register("email")}
                    name="email"
                    id="email"
                  />
                </div>

                <div className="flex relative flex-col">
                  <label className="" htmlFor="password">
                    Password:
                  </label>
                  <input
                    className="border-b-[2px] p-2 border-black"
                    type="password"
                    name="password"
                    {...register("password")}
                    id="password"
                  />
                  <span className="absolute left-[81%] top-[60%] cursor-pointer md:left-[86%] min-[570px]:left-[90.5%]">
                    <img src={EyeLogo} alt="eyelogo" />
                  </span>
                </div>
              </section>
              {/* checkbox and policy section */}
              <section className="w-[92%] ml-3 sm:ml-0 md:w-[67%] lg:w-[88%] xl:w-[68%] flex justify-center items-center mt-3">
                <label
                  className="text-[12px] sm:text-base"
                  htmlFor="keepMeLogIn"
                >
                  <span>
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="keepMeLogIn"
                      {...register("keepMeLogIn")}

                      id="keepMeLogIn"
                    />
                  </span>
                  I agree to Voice out to me
                  <span>
                    <Link>Terms of Service </Link>
                  </span>
                  and Privacy
                  <span>
                    <Link> Policy</Link>
                  </span>
                </label>
              </section>
  </div>
  

              {/* submit button */}
              <div className="flex justify-center items-center w-full">
                <button
                  className=" w-[80%] md:w-[60%] md:ml-[-5%]  py-3 bg-[#534B75] text-white rounded mt-[3rem] font-medium transition-all hover:opacity-70"
                  type="submit"
                >
                  Create Account
                </button>
              </div>
            </form>
            {/* or section */}
            <section className="flex">
              <div className="flex items-center justify-center w-full mt-[4rem] mb-[2rem]">
                <span className="w-[32%] md:w-[35%] lg:w-[40%] min-[532px]:w-[34%] h-[1px] bg-black "></span>
                <p className="px-2 text-[#1E122D] "> OR</p>
                <span className="w-[32%] md:w-[35%] lg:w-[40%] min-[532px]:w-[34%] h-[1px] bg-black"></span>
              </div>
            </section>
            {/* siging in with social media */}
            <section className="flex justify-center items-center">
              <div className="flex flex-col gap-2 md:flex-row justify-center md:gap-[2rem] items-center w-[95%] md:w-[90%]">
                <button className="w-[80%] flex gap-2 border-[1px] border-violet-600 md:w-[40%] lg:w-[45%] justify-center items-center py-2 px-2 rounded ">
                  <img src={GoogleLogo} alt="googleLogo" />
                  <span>Sign in with Google</span>
                </button>
                <button className="w-[80%] flex gap-2 border-[1px] border-violet-600 md:w-[40%] lg:w-[45%]  px-2 justify-center items-center py-2 rounded">
                  <img src={FacebookLogo} alt="googleLogo" />
                  <span>Sign in with Google</span>
                </button>
              </div>
            </section>

            <p className="text-[#414041] mt-[2rem] mb-[5rem] lg:my-[1rem] lg:mt-[3rem] ml-[8%] lg:ml-0">
              Already have an account?{" "}
              <span className="text-[#938AB4]">
                <Link to={"/logincounselor"}>Log in</Link>
              </span>
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default SignUpCounselor;
