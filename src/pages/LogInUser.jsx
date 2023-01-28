import React from "react";
import GetStartedImage2 from "../assets/images/get-started-image2.svg"
import UserLogInImage from "../assets/images/user-log-in-image.svg"

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
                <h1>Welcome Back</h1>
                <p></p>
            </div>
            <div className="w-[36.75rem] h-[44.313rem]" 
            style={{background:`url(${UserLogInImage})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"contain"
            }}></div>
          </section>
          <section className="w-[50%]"></section>
        </main>
      </div>
    </>
  );
};

export default LogInUser;
