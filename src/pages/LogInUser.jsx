import React from "react";
import GetStartedImage2 from "../assets/images/get-started-image2.svg"

const LogInUser = () => {
  return (
    <>
      <div className="w-full h-[40rem] relative">
      <img
          className="absolute w-[10rem]"
          src={GetStartedImage2}
          alt="getstartedimage1"
        />

        <main className="flex justify-center items-center">
          <section className="w-[50%]">
            <div>
                <h1></h1>
                <p></p>
            </div>
            <div className="w-[36.75rem] h-[44.313rem]" ></div>
          </section>
          <section className="w-[50%]"></section>
        </main>
      </div>
    </>
  );
};

export default LogInUser;
