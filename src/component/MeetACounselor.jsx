import React from "react";

const MeetACounselor = () => {
  return (
    <div className="w-[83vw] h-[40.375rem] m-auto">
      <h1 className="meet-a-counselor text-center text-[#290C1E] text-4xl mt-[6.5rem]">
        Meet a Counselor
      </h1>
      <div className="flex justify-between mt-6 ">
        <section className="flex flex-col gap-4">
          <input
            className=" border-[1px] border-black py-4 pl-2 pr-4 w-[18rem]"
            type="text"
            placeholder="Type of counselor"
          />
          <h1 className="text-2xl">Trauma Counselor</h1>
          <h1 className="text-2xl">Mental Health Counselor</h1>
          <h1 className="text-2xl">Marriage Counselor</h1>
          <h1 className="w-[18rem] border-[1px] border-black py-1 pl-2 pr-4">
            All
          </h1>
        </section>
        <section className="flex gap-2">
          <div className="mt-[3rem]">
            <section className="w-[15.954rem] h-[11.188rem] border-[1.4px] border-black mb-[50px]"></section>
            <section className="w-[15.954rem] h-[11.188rem] border-[1.4px] border-black"></section>
          </div>
          <div>
            <section className="w-[15.954rem] h-[11.188rem] border-[1.4px] border-black mb-[50px]"></section>
            <section className="w-[15.954rem] h-[11.188rem] border-[1.4px] border-black"></section>
          </div>
          <div className="w-[15.954rem] h-[11.188rem] border-[1.4px] border-black mt-[8rem]"></div>
        </section>
      </div>
      <button className="ml-[40%] bg-[#4D7679] rounded py-[1.25rem] px-[5.969rem] mt-8 text-white text-2xl">Register</button>
    </div>
  );
};

export default MeetACounselor;
