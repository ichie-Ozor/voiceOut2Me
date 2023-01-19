import React from "react";

const PrimaryBtn1 = ({ Name }) => {
  return (
    <div>
      <button
        className="w-[198px] h-[64px] bg-[#4D7679]"
      >
        {Name}
      </button>
    </div>
  );
};

export default PrimaryBtn1;

export const SecondaryBtn1 = ({ Name }) => {
    return (
      <div>
        <button
          className="w-[314px] h-[54px] bg-[#4D7679]"
        >
          {Name}
        </button>
      </div>
    );
  };
  