import React from "react";
import GoogleLogo from "../assets/images/google-logo.svg";
import FacebookLogo from "../assets/images/facebook-logo.svg";
import UserSignupIMage from "../assets/images/user-signup-image.svg";
import EyeLogo from "../assets/images/eye-logo.svg";
import { Link } from "react-router-dom";
import { schemaSignUpUser } from "../util/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToUsers } from "../store/slice/usersSlices";
import { useState } from "react";

const SignUpUser = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    keepMeLogIn: "false",
  });
  const { fullName, userName, email, password, keepMeLogIn } = userInfo;
  const changeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };


  const {
    register,
    // formState: { errors },
    // handleSubmit,
  } = useForm({
    mode: "onsubmit",
    criticalMode: "all",
    revalidateMode: "onchange",
    resolver: yupResolver(schemaSignUpUser),
  });
  const submitHandler = (e) => {
    e.preventDefault()
    const addUser = {
      id: new Date().getMilliseconds(),
      fullName,
      userName,
      email,
      password,
      terms:keepMeLogIn,
    };

    
    dispatch(addToUsers(addUser));
  };

  return (
    <>
      <div className="w-full h-full relative font-Lato">
        <main className="flex flex-col lg:flex-row ">
          {/* Hero section */}
          <section className=" w-full lg:w-[50%] flex flex-col items-center relative">
            <div className="w-full flex justify-center items-center absolute lg:top-[15%]">
              <p className="  w-[80%] p-2 my-[2rem] text-center lg:text-left lg:w-[85%] font-Lato xl:w-[70%] text-[#281C2D]">
                Get an unbiased advice from our professional Psychotherapist and
                improve positivity.
              </p>
            </div>

            <div
              className="w-[15rem] h-[22rem] mt-[50%] md:mt-[20%] sm:mt-[25%] md:w-[22rem] md:h-[30rem] lg:w-[32.25rem]  min-[1440px]:w-[45.25rem] xl:lg:w-[45.25rem] lg:h-[35rem] xl:h-[42rem] relative mb-[5rem] lg:mt-[60%] xl:mt-[40%] min-[562px]:mt-[25%]"
              style={{
                background: `url(${UserSignupIMage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </section>
          {/* Form section */}
          <section className="w-full lg:w-[50%] ml-[0.3rem] md:ml-[1rem] lg:ml-[-5%] mt-[-20%] md:mt-[-5%] min-[562px]:mt-[-10%] lg:mt-[10%] sm:mt-[10%]">
            {/* Header */}
            <header className="flex justify-center items-center font-Lato text-[32px] py-[2rem] ">
              <h1 className=" text-[#8155BA] font-bold">Sign Up</h1>
            </header>

            <form
              className=" w-full lg:w-[100%] m-auto "
              action="#"
              onSubmit={submitHandler}
            >
                            {/* form sub section */}
<div className="flex justify-center items-center flex-col ml-[5%]">

              {/* input section without the checkbox */}
              <section className="w-[90%] lg:w-full m-auto [&_Input]:w-[90%] ">
                <div className="flex relative mb-[1rem]  flex-col">
                  <label className="" htmlFor="fullName">
                    Full Name:
                  </label>
                  <input
                    className="border-b-[2px] p-2 border-black"
                    type="text"
                    {...register("fullName")}
                    value={userInfo.fullName}
                    name="fullName"
                    id="fullName"
                    onChange={changeHandler}
                  />
                </div>


                <div className="flex relative mb-[1rem] flex-col">
                  <label className="" htmlFor="username">
                    Username:
                  </label>
                  <input
                    className="border-b-[2px]  p-2  border-black"
                    type="text"
                    {...register("userName")}
                    value={userName}
                    name="userName"
                    id="Username"
                    onChange={changeHandler}
                  />
                </div>
                <div className="flex relative mb-[1rem] flex-col">
                  <label className="" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="border-b-[2px] p-2 border-black"
                    type="text"
                    {...register("email")}
                    value={email}
                    name="email"
                    id="email"
                    onChange={changeHandler}
                  />
                </div>

                <div className="flex relative flex-col">
                  <label className="" htmlFor="password">
                    Password:
                  </label>
                  <input
                    className="border-b-[2px]  p-2 border-black"
                    type="password"
                    name="password"
                    {...register("password")}
                    value={password}
                    id="password"
                    onChange={changeHandler}
                  />
                  <span className="absolute left-[82%] top-[50%]  cursor-pointer md:left-[86%] min-[570px]:left-[90.5%]">
                    <img src={EyeLogo} alt="eyelogo" />
                  </span>
                </div>
              </section>
              {/* checkbox and policy section */}
              <section className="w-[92%] ml-3 sm:ml-0 md:w-[67%] lg:w-[95%] md:ml-[-28%] lg:ml-[-10%]  xl:ml-[-35%] flex justify-center items-center mt-3">
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
                      onChange={changeHandler}
                      value="true"
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

            <p className="text-[#414041] mt-[2rem] mb-[5rem] lg:my-[1rem] lg:mt-[5rem] ml-[8%] lg:ml-0">
              Already have an account?{" "}
              <span className="text-[#938AB4]">
                <Link to={"/loginuser"}>Log in</Link>
              </span>
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default SignUpUser;
