import React from "react";

const PrimaryBtn1 = ({ Name }) => {
  return (
    <div>
      <button className="px-6 py-2 bg-[#8155BA] rounded hover:opacity-80 font-bold"

      >{Name}</button>
    </div>
  );
};

export default PrimaryBtn1;

export const SecondaryBtn1 = ({ Name }) => {
  return (
    <div>
      <button className="w-[314px] h-[54px] bg-[#8155BA] px-10"
    >
        {Name}
      </button>
    </div>
  );
};
