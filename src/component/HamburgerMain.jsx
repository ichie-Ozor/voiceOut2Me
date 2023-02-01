import classNames from "classnames";
import React from "react";

const HamburgerMain = ({ToggleMenu}) => {
  return (
      <div className="sm:w-12 w-8 h-8 sm:h-10 flex flex-col gap-[5px] sm:gap-[10px] overflow-hidden border-none mr-4 p-1 lg:hidden">
        <span className={classNames("w-10 h-[4px] bg-[#8155BA] rounded transition-all  duration-[0.3s]",
        {"rotate-45 translate-x-[0.85em] translate-y-[1.19em] bg-white  ": ToggleMenu})}></span>
        <span className={classNames("w-10 h-[4px] bg-[#8155BA]  rounded transition-all  duration-[0.3s]",{"scale-[0.1]  bg-white": ToggleMenu})}></span>
        <span className={classNames("w-10 h-[4px] bg-[#8155BA]  rounded transition-all  duration-[0.3s]",{"rotate-[135deg] translate-x-[0.8em] translate-y-[-0.75em]  bg-white ": ToggleMenu})}></span>
    </div>
  );
};

export default HamburgerMain;
