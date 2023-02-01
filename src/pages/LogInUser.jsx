import React from "react";
import GetStartedImage2 from "../assets/images/get-started-image2.svg";
import UserLogInImage from "../assets/images/user-log-in-image.svg";
import Logo from "../assets/images/logo.svg";
import GoogleLogo from "../assets/images/google-logo.svg";
import EyeLogo from "../assets/images/eye-logo.svg";
import { Link } from "react-router-dom";
import { schemaLogInUser } from "../util/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const LogInUser = () => {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onsubmit",
    criticalMode: "all",
    revalidateMode: "onchange",

    resolver: yupResolver(schemaLogInUser),
  });

  return (
    <>
      <div className="w-full h-full relative font-Lato">
        <img
          className="w-[2rem] absolute lg:w-[10rem]"
          src={GetStartedImage2}
          alt="getstartedimage1"
        />

        <img className="h-[10rem] ml-[25%] sm:ml-[35%] md:ml-[40%] lg:ml-[66%] xl:ml-[68%] min-[425px]:ml-[30%] min-[570px]:ml-[35%]" src={Logo} alt="logo" />
        <main className="flex flex-col lg:flex-row ">
          <section className=" w-full lg:w-[50%] flex flex-col items-center ">
            <div className="flex flex-col justify-center  text-cente">
              <h1 className="text-2xl font-[600] text-violet-700 text-center">
                Welcome Back
              </h1>
              <p className=" p-2 text-center lg:text-left w-[15rem] sm:w-[25rem] lg:ml-8 my-[1rem]">
                We have great features awaiting you on our platform, sign in now
                to access them all
              </p>
            </div>
            <div
              className="w-[15rem] h-[18rem] lg:w-[25.75rem] lg:h-[44.313rem] ml-[2%] lg:ml-0"
              style={{
                background: `url(${UserLogInImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </section>

          <section className="w-full lg:w-[50%] ml-[0.3rem] md:ml-[1rem] lg:ml-0">
            <div className="flex flex-col items-start gap-5">
              <h1 className="ml-[5%] lg:ml-0">Sign in into your account</h1>
              <button className="flex gap-8 border-[1px] border-violet-600 w-[16rem] sm:w-[20rem] ml-[8%] sm:ml-[25%] md:w-[25rem] md:ml-[22%] min-[425px]:ml-[18%] min-[373px]:ml-[15%] min-[363px]:ml-[14%] min-[570px]:ml-[27%]  lg:w-[23.625rem] justify-center items-center py-4 rounded lg:ml-[10%] xl:ml-[22%]">
                <img src={GoogleLogo} alt="googleLogo" />
                <span>Sign in with Google</span>
              </button>
              <div className="flex items-center  ml-[-6%] sm:ml-[2%] md:ml-[5px]  lg:ml-[-0.5rem] mt-[1rem] mb-[2rem] min-[425px]:ml-[-10px] min-[540px]:ml-[0rem] min-[373px]:ml-[-9px] min-[363px]:ml-[-9px]">
                <span className="w-[3rem] sm:w-[10rem] md:w-[15rem] lg:w-[7.5rem] xl:w-[13.5rem] min-[1366px]:w-[12rem] min-[425px]:w-[5.5rem]  min-[373px]:w-[4rem] min-[363px]:w-[3.5rem] min-[1440px]:ml-[2.5rem] min-[540px]:w-[9.4rem] min-[748px]:w-[13.8rem] h-[1px] bg-black ml-[2rem]"></span>
                <p className="px-2 text-[#1E122D] "> OR LOG IN WITH EMAIL</p>
                <span className="w-[3rem] sm:w-[10rem] md:w-[14rem] lg:w-[7.5rem] xl:w-[13.5rem] min-[1366px]:w-[12rem]  min-[425px]:w-[5.5rem] min-[373px]:w-[4rem] min-[363px]:w-[3.5rem] min-[1440px]:ml-[2.5rem] min-[540px]:w-[9.4rem] min-[748px]:w-[13.8rem] h-[1px] bg-black"></span>
              </div>
            </div>

            <form className=" w-full lg:w-[90%] m-auto" action="#" onSubmit={handleSubmit()}>
              <section className="w-[90%] lg:w-full m-auto">

              <div className="flex relative mb-[2rem]">
                <label className="absolute" htmlFor="userName">
                  Username:
                </label>
                <input
                  className="border-b-[2px] pl-[5rem] pt-4 w-[95%] border-black"
                  type="text"
                  {...register("userName")}
                  name="userName"
                  id="userName"
                />
              </div>

              <div className="flex relative">
                <label className="absolute" htmlFor="userName">
                  Password:
                </label>
                <input
                  className="border-b-[2px] px-[5rem] pt-4 w-[95%] border-black"
                  type="password"
                  name="password"
                  {...register("password")}

                  id="password"
                />
                <span className="absolute left-[88%] top-[25%] cursor-pointer md:left-[90%] min-[570px]:left-[90.5%]">
                  <img src={EyeLogo} alt="eyelogo" />
                </span>
              </div>
              <div>
                <div className="flex justify-between w-[80%] mt-3">
                  <label className="text-[12px] sm:text-base" htmlFor="keepMeLogIn">
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
                  <p className="text-[12px] sm:text-base">Forget password?</p>
                </div>
              </div>
              </section>
              <button className="px-[35%] ml-[8%] lg:px-[9.875rem] py-3 bg-[#534B75] text-white lg:ml-[10%] xl:ml-[23%] rounded mt-[3rem] font-medium transition-all hover:opacity-70" type="submit">Log in</button>
            </form>
            <p className="text-[#414041] mt-[2rem] mb-[5rem] lg:my-[1rem] lg:mt-[5rem] ml-[8%] lg:ml-0">Don’t have an account?<span className="text-[#938AB4]"><Link>Create Account</Link></span> </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default LogInUser;
