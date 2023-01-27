import React from "react";
import Header from "../component/landing page/Header";
import MeetACounselor from "../component/MeetACounselor";
import SubHeading from "../component/SubHeading";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <SubHeading />
      </div>
      <div><MeetACounselor/></div>
    </>
  );
};

export default Home;
