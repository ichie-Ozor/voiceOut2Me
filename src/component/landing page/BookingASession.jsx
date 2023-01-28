import React from "react";
import RightRiangleImage from "../../assets/images/landing page/right-triangle.svg";
import BookingASessionImage from "../../assets/images/landing page/booking-a-session-image.svg";

const BookingASession = () => {
  return (
    <>
      <div className="w-[93%] ml-auto font-Lato">
        <section className=" header-wrapper w-[21.688rem] h-[5.813rem] bg-[#695E93BF] flex flex-col justify-center items-center gap-1 mt-[2rem] mr-0 ml-[53%]">
          <span className="absolute right-0">
            <img src={RightRiangleImage} alt="right triangle" />
          </span>
          <h1 className="text-2xl text-white font-[600]">
            Booking A Session Made Easy
          </h1>
        </section>
        <section className="flex gap-12">
          <div
            className="w-[50%] h-[33.575rem] rounded bg-white"
            style={{
              background: `url(${BookingASessionImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <div className="w-[48%]">
            <div className="text-button-wrapper flex flex-col items-center mt-[25%]"></div>
            <p
              className="w-[23.688rem]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Depression isn’t a stigma, do not shy away from speaking out. Book
              a counselling session on our platform to share your burden. Sign
              In to start your booking session.
            </p>
            <button className=" text-white py-[17.5px] px-[49.58px] rounded mt-[40px] bg-[#8155BA] transition-all hover:opacity-70">
              BOOK A SESSION
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookingASession;
