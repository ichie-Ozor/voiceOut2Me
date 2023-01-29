import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="w-full lg:h-[14.5re] p-4 bg-[#695E93] flex flex-col gap-[2rem] lg:flex-row lg:gap-[10rem] justify-center lg:items-center font-Lato mt-[5rem] lg:mt-[-5rem] xl:mt-[5rem]">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-xl text-white font-medium">Legal</h1>
          </div >
          <Link className="text-sm text-white/50">Information</Link>
          <Link className="text-sm text-white/50">Privacy policy</Link>
          <Link className="text-sm text-white/50">Report abuse</Link>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-xl text-white font-medium">Support</h1>
          </div >
          <Link className="text-sm text-white/50">Contact us</Link>
          <Link className="text-sm text-white/50">Forums</Link>
          <Link className="text-sm text-white/50">Community</Link>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-xl text-white font-medium">Company</h1>
          </div >
          <Link className="text-sm text-white/50">About us</Link>
          <Link className="text-sm text-white/50">Blog</Link>
          <Link className="text-sm text-white/50">Careers</Link>
        </div>
        <div className="lg:flex flex-col gap-2 relative">
          <div>
            <h1 className="text-xl text-white font-medium ">Subscribe our Newsletter</h1>
          </div >
          <p className="text-white/50 mb-5">Provide a reminder to learn more about new content.</p>
          <div className="flex flex-col gap-2 w-[80%] lg:flex lg:gap-2  lg:items-cente">
          <label className="text-white" htmlFor="email">Email:</label>
          <input className="p-2 rounded" type="text" placeholder="Enter Email" name="email"/>
          <button className=" bg-white rounded py-2 px-6 text-[#695E93] font-bold">Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
