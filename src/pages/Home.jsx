import React from "react";
import AboutSection from "../component/landing page/AboutSection";
import Footer from "../component/landing page/Footer";
import Header from "../component/landing page/Header";
import OurSpecialFeature from "../component/OurSpecialFeature";
import SubHeading from "../component/SubHeading";

const Home = () => {
  return (
    <>
      {/* Header starts here */}
      <div>
        <Header />
      </div>
      {/* Header Ends here */}
      {/* Vouice out and be heard starts here */}
      <div>
        <SubHeading />
      </div>
      {/* Vouice out and be heard ends here */}

      {/* Our Special Features starts here */}
      <div>
        <OurSpecialFeature />
      </div>

      {/* Our Special Features ends here */}

      {/* About Us starts here */}
      <AboutSection />
      {/* About Us end here */}

      {/* Booking A Session Made Easy starts here */}

      {/* Booking A Session Made Easy ends here */}

      {/* Contact Us starts here */}

      {/* Contact Us ends here */}

      {/* Footer starts here */}
      <Footer />
      {/* Footer ends here */}
    </>
  );
};

export default Home;
