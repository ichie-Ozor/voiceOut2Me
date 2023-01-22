import React from "react";

const Hamburger = () => {
  return (
      <div className="sm:w-12 w-8 h-8 sm:h-10 flex flex-col gap-[5px] sm:gap-[10px] overflow-hidden border-none mr-3 p-1 lg:hidden">
        <span className="w-10 h-[4px] bg-white  rounded"></span>
        <span className="w-10 h-[4px] bg-white rounded"></span>
        <span className="w-10 h-[4px] rounded bg-white"></span>
    </div>
  );
};

export default Hamburger;
