import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

const Heading = () => {
  return (
    <div>
      <header className="relative w-[83vw] m-auto h-[5.438rem] flex justify-center font-OpenSand">
        <img className="absolute left-[-3rem] top-[-2rem] w-40" src={Logo} alt="logo" />
        <nav className="flex justify-between items-center leading-6 w-[93%] m-auto  mr-0">
          <h1>Voice out to me</h1>
          <div className="flex gap-12 text-[#52193C] font-bold">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Service</Link>
          </div>
          <Link className=" bg-[#290C1E] text-white py-5 px-[3.875rem] mr-0">Register</Link>
        </nav>
      </header>
    </div>
  );
};

export default Heading;
