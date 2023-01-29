import React from "react";

const HamburgerMain = () => {
  return (
      <div className="sm:w-12 w-8 h-8 sm:h-10 flex flex-col gap-[5px] sm:gap-[10px] overflow-hidden border-none mr-3 p-1 lg:hidden">
        <span className="w-10 h-[4px] bg-[#8155BA]  rounded"></span>
        <span className="w-10 h-[4px] bg-[#8155BA] rounded"></span>
        <span className="w-10 h-[4px] rounded bg-[#8155BA]"></span>
    </div>
  );
};

export default HamburgerMain;
