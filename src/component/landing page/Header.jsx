import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import HamburgerMain from "../HamburgerMain";

const Header = () => {
  return (
    <div>
      <header className="relative w-[100vw] lg:w-[90vw] xl:w-[85vw] m-auto h-[5.438rem] flex justify-center font-OpenSand">
        <img
          className="absolute left-[-3rem] top-[-2rem] w-40 "
          src={Logo}
          alt="logo"
        />
        <nav className="flex justify-between items-center leading-6 w-[93%] m-auto  mr-0">
          <h1 className=" ml-[4rem] sm:ml-[3rem] lg:ml-[2rem] text-lg md:text-3xl text-[#8155BA] font-bold font-Lato">
            VoiceOut2me
          </h1>
          <div className="flex lg:hidden ml-[10%]">
            <HamburgerMain />
          </div>
          <div className="hidden lg:flex lg:gap-[1.5rem] text-[#555455]">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"about"}>About</NavLink>
            <NavLink to={"service"}>Service</NavLink>
            <NavLink to={"contact"}>Contact</NavLink>
            <NavLink to={"support"}>Support</NavLink>
          </div>
          <NavLink to={"getstarted"} className=" hidden lg:flex text-[#BEAFC2] lg:py-2 lg:px-6 mr-0 border-[1px] border-[#695E9] rounded-[20px] transition-all hover:scale-105">
            Book a session
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
