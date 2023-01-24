import React from "react";

const SubHeading = () => {
  return (
    <div>
      <section className="w-[83vw] m-auto flex justify-between mt-[4.625rem]">
        <div className="get-help w-[49%] mt-[10%]">
          <h1 className="text-[50px] text-[#290C1E] font-Lato font-normal p-2">
            Get Help,Get Better. You Deserved to be happy.
          </h1>
          <p className="text-center w-[27rem] m-auto font-Lato text-[#290C1E]">
            No matter what’s troubling you,Get the counsel you need here, and
            right now.
          </p>
          <section className="flex gap-8 mt-[6.625rem]">
            <button className="chat-now bg-[#52193C] text-white py-[17.5px] px-[49.58px] rounded">Chat Now</button>
            <button className="book-appointment rounded border-[1px] border-black py-[18.5px] px-[9.5px]">Book Appointments</button>
          </section>
        </div>
        <div className="image-container w-[49%] h-[38.063rem] bg-[#D9D9D9] "></div>
      </section>
    </div>
  );
};

export default SubHeading;
