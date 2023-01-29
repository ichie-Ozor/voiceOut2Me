import React from "react";
import GetStartedImage2 from "../assets/images/get-started-image2.svg";
import UserLogInImage from "../assets/images/user-log-in-image.svg";
import Logo from "../assets/images/logo.svg";
import GoogleLogo from "../assets/images/google-logo.svg";
import EyeLogo from "../assets/images/eye-logo.svg";
import { Link } from "react-router-dom";

const LogInUser = () => {
  return (
    <>
      <div className="w-full h-[40rem] relative font-Lato">
        <img
          className="absolute w-[10rem]"
          src={GetStartedImage2}
          alt="getstartedimage1"
        />

        <img className="h-[10rem]  ml-[62%]" src={Logo} alt="logo" />
        <main className="flex ">
          <section className="w-[50%] flex flex-col items-center">
            <div className="flex flex-col justify-center  text-cente">
              <h1 className="text-2xl font-[600] text-violet-700 text-center">
                Welcome Back
              </h1>
              <p className=" p-2 w-[23.875rem]  ml-8">
                We have great features awaiting you on our platform, sign in now
                to access them all
              </p>
            </div>
            <div
              className="w-[36.75rem] h-[44.313rem]"
              style={{
                background: `url(${UserLogInImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </section>

          <section className="w-[50%]">
            <div className="flex flex-col items-start gap-5">
              <h1>Sign in into your account</h1>
              <button className="flex gap-8 border-[1px] border-violet-600 w-[23.625rem] justify-center items-center py-4 rounded ml-[5rem]">
                <img src={GoogleLogo} alt="googleLogo" />
                <span>Sign in with Google</span>
              </button>
              <div className="flex items-center mb-10">
                <span className="w-[11.875rem] h-[1px] bg-black"></span>
                <p className="px-2 text-[#1E122D]"> OR LOGIN WITH EMAIL</p>
                <span className="w-[11.875rem] h-[1px] bg-black"></span>
              </div>
            </div>

            <form action="#">
              <div className="flex relative mb-[2rem]">
                <label className="absolute" htmlFor="userName">
                  Username:
                </label>
                <input
                  className="border-b-[2px] pl-[5rem] pt-4 w-[80%] border-black"
                  type="text"
                  name="userName"
                  id="userName"
                />
              </div>

              <div className="flex relative">
                <label className="absolute" htmlFor="userName">
                  Password:
                </label>
                <input
                  className="border-b-[2px] px-[5rem] pt-4 w-[80%] border-black"
                  type="password"
                  name="password"
                  id="password"
                />
                <span className="absolute left-[75%] top-[25%] cursor-pointer">
                  <img src={EyeLogo} alt="eyelogo" />
                </span>
              </div>
              <div>
                <div className="flex justify-between w-[80%] mt-5">
                  <label className="" htmlFor="keepMeLogIn">
                    <span>
                      <input
                      className="mr-5"
                        type="checkbox"
                        name="keepMeLogIn"
                        id="keepMeLogIn"
                      />
                    </span>
                    Keep me logged in
                  </label>
                  <p>Forget password?</p>
                </div>
              </div>
              <button className="px-[9.875rem] py-5 bg-[#534B75] text-white ml-[15%] rounded mt-[5rem] font-medium transition-all hover:opacity-70" type="submit">Log in</button>
            </form>
            <p className="text-[#414041] mt-[5rem]">Don’t have an account?<span className="text-[#938AB4]"><Link>Create Account</Link></span> </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default LogInUser;
