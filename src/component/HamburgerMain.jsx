import classNames from "classnames";
import React from "react";

const HamburgerMain = ({ToggleMenu}) => {
  return (
    <><div className={classNames(" text-center flex justify-center items-center rounded-full z-40 overflow-hidden ",{"bg-white w-[2.5rem] m-5 md:w-[3rem] md:m-4 mb-10": ToggleMenu})}>
      <div className={classNames("sm:w-12 w-8 h-8 sm:h-10 flex flex-col gap-[5px] sm:gap-[10px] overflow-hidden border-none mr-3 p-1 lg:hidden z-40",{
        "pl-2":ToggleMenu
      })}>
      <span className={classNames("w-[2.5rem] h-[0.25rem] md:w-[2.5rem] bg-[#8155BA]  rounded", { "w-[1.7rem] h-[0.25rem] rotate-45 origin-[1px]  transition-all duration-[0.3s]": ToggleMenu })}></span>
      <span className={classNames("w-[2.5rem] h-[0.25rem] bg-[#8155BA]  rounded", { "w-[1.7rem] h-[0.25rem] scale-0 ": ToggleMenu })}></span>
      <span className={classNames("w-[2.5rem] h-[0.25rem] md:w-[2.5rem] bg-[#8155BA]  rounded", { "w-[1.7rem] h-[0.25rem] -rotate-45 origin-[1px]  transition-all duration-[0.3s]": ToggleMenu })}></span>
    </div>
      </div>
    </>
  );
};

export default HamburgerMain;
