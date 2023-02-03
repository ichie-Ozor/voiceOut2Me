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
import { useSelector } from "react-redux";

const LogInUser = () => {
  // const navigate = useNavigate();
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

  const getUsers = useSelector((state) => state.Users.value.users);
  console.log(getUsers);
  // const clickHandler = () => {
  //   navigate("/signupuser");
  // };
  return (
    <>
      <div className="w-full h-full relative font-Lato">
        <img
          className="w-[2rem] absolute lg:w-[10rem]"
          src={GetStartedImage2}
          alt="getstartedimage1"
        />

        <img
          className="h-[10rem] ml-[25%] sm:ml-[35%] md:ml-[40%] lg:ml-[66%] xl:ml-[68%] min-[425px]:ml-[30%] min-[570px]:ml-[35%]"
          src={Logo}
          alt="logo"
        />
        <main className="flex flex-col lg:flex-row">
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
            {/* Hero image */}
            <div
              className="w-[15rem] h-[18rem] lg:w-[25.75rem] lg:h-[33.313rem] ml-[2%] lg:ml-0"
              style={{
                background: `url(${UserLogInImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </section>

          <section className="w-full lg:w-[50%] ">
            <div className="flex flex-col items-start gap-5 ">
              <h1 className="ml-[5%] lg:ml-0">Sign in into your account</h1>
            </div>
            <div className="w-full flex justify-center items-center mt-[1rem]">
            <button className="flex gap-5 border-[1px] border-violet-600 w-[16rem] py-3 justify-center items-center rounded">
                <img src={GoogleLogo} alt="googleLogo" />
                <span>Sign in with Google</span>
              </button>

            </div>
            <div className="flex justify-center items-center w-full mt-[4rem] mb-[1rem] ml-[-1%] [&_span]:w-[17%] min-[375px]:[&_span]:w-[21%]  min-[562px]:[&_span]:w-[27%] md:[&_span]:w-[31.3%] md:ml-[0] lg:[&_span]:w-[25%] xl:[&_span]:w-[29.5%]">
              <span className=" h-[1px] bg-black"></span>
              <p className="px-2 text-[#1E122D] text-sm">
                OR LOG IN WITH EMAIL
              </p>
              <span className="h-[1px] bg-black"></span>
            </div>
{/* Form section */}
            <form
              className=" w-full lg:w-[90%] m-auto"
              action="/#"
              onSubmit={handleSubmit()}
            >
{/* form sub-section */}
<div className="ml-[3.5%] ">
              <section className="w-[90%] lg:w-full m-auto ">
                <div className="flex relative mb-[1rem] flex-col">
                  <label className="" htmlFor="userName">
                    Username:
                  </label>
                  <input
                    className="border-b-[2px] p-2 w-[95%] border-black"
                    type="text"
                    {...register("userName")}
                    name="userName"
                    id="userName"
                  />
                </div>

                <div className="flex relative flex-col">
                  <label className="" htmlFor="userName">
                    Password:
                  </label>
                  <input
                    className="border-b-[2px] p-2 w-[95%] border-black"
                    type="password"
                    name="password"
                    {...register("password")}
                    id="password"
                  />
                  <span className="absolute left-[86%] top-[58%] cursor-pointer md:left-[90%] min-[570px]:left-[90.5%]">
                    <img src={EyeLogo} alt="eyelogo" />
                  </span>
                </div>
                <div>
                  <div className="flex justify-between w-[80%] mt-3">
                    <label
                      className="text-[12px] sm:text-base"
                      htmlFor="keepMeLogIn"
                    >
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
                    <Link className="text-[12px] sm:text-base">Forget password?</Link>
                  </div>
                </div>
              </section>
                </div>
                {/* button section */}
              <button className="px-[35%] ml-[8%] lg:px-[9.875rem] py-3 bg-[#534B75] text-white lg:ml-[10%] xl:ml-[23%] rounded mt-[3rem] font-medium transition-all hover:opacity-70">
                Log in
              </button>
            </form>
            <p className="text-[#414041] mt-[2rem] mb-[5rem] lg:my-[1rem] lg:mt-[5rem] ml-[8%] lg:ml-0">
              Don’t have an account?
              <span className="text-[#938AB4]">
                <Link to={"/signupuser"} >Create Account</Link>
              </span>{" "}
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default LogInUser;
