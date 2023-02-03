import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { emailSubscribtion } from "../../util/schema";

const Footer = () => {
  const {
    register,
    // formState: { errors },
    handleSubmit,
    // reset,
  } = useForm({
    mode: "onsubmit",
    criticalMode: "all",
    revalidateMode: "onchange",

    resolver: yupResolver(emailSubscribtion),
  });

  const [email, setEmail] = useState("");

  const onchangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = async (e) => {
    // e.preventDefault();
    // const NotifyEmialApi =
    // "https://v1.nocodeapi.com/voiceout2me/google_sheets/HuKXRGNHEoAOgyOh?tabId=sheet1"

    // try {
    //   const response = await fetch(NotifyEmialApi, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify([[email, new Date().toLocaleString()]]),
    //   });
    //   await response.json();
    //   alert("Response submitted successfully");
    //   setEmail("");
    // } catch (error) {
    //   alert(error);
    // }
    // reset()
  };


  return (
    <>
      <section className="w-full lg:h-[14.5re] p-4 bg-[#695E93] flex flex-col gap-[2rem] lg:flex-row lg:gap-[10rem] justify-center lg:items-center font-Lato mt-[5rem] lg:mt-[-5rem] xl:mt-[5rem]">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-xl text-white font-medium">Legal</h1>
          </div>
          <Link className="text-sm text-white/50">Information</Link>
          <Link className="text-sm text-white/50">Privacy policy</Link>
          <Link className="text-sm text-white/50">Report abuse</Link>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-xl text-white font-medium">Support</h1>
          </div>
          <Link to={"/contact"} className="text-sm text-white/50">
            Contact us
          </Link>
          <Link className="text-sm text-white/50">Forums</Link>
          <Link className="text-sm text-white/50">Community</Link>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-xl text-white font-medium">Company</h1>
          </div>
          <Link to={"/about"} className="text-sm text-white/50">
            About us
          </Link>
          <Link className="text-sm text-white/50">Blog</Link>
          <Link className="text-sm text-white/50">Careers</Link>
        </div>
        <div className="lg:flex flex-col gap-2 relative">
          <div>
            <h1 className="text-xl text-white font-medium ">
              Subscribe our Newsletter
            </h1>
          </div>
          <p className="text-white/50 mb-5">
            Provide a reminder to learn more about new content.
          </p>
          <form action="" onSubmit={submitHandler(handleSubmit)}>
            <div className="flex flex-col gap-2 w-[80%] lg:flex lg:gap-2  lg:items-cente">
              <label className="text-white" htmlFor="email">
                Email:
              </label>
              <input
                className="p-2 rounded"
                type="text"
                placeholder="Enter Email"
                name="email"
                {...register("email")}
                value={email}
                onChange={onchangeHandler}
              />

              <button  className=" bg-[#8155BA] rounded py-2 px-6 text-white border-[1px] border-white font-bold transition-all duration-[0.3s] hover:opacity-60">
                Submit
              </button>

            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Footer;
