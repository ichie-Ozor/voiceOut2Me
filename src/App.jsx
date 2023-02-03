import { Route, Routes } from "react-router";
import GlobalLayout from "./component/landing page/GlobalLayout";
import About from "./pages/About";
import BookASession from "./pages/BookASession";
import Contact from "./pages/Contact";
import CounselorDashbord from "./pages/CounselorDashbord";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import LogInCounselor from "./pages/LogInCounselor";
import LogInUser from "./pages/LogInUser";
import Service from "./pages/Service";
import SignUpCounselor from "./pages/SignUpCounselor";
import SignUpUser from "./pages/SignUpUser";
import SoonComingPage from "./pages/SoonComingPage";
import Support from "./pages/Support";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<SoonComingPage />} />
        <Route path="loginuser" element={<LogInUser />} />
        <Route path="logincounselor" element={<LogInCounselor />} />
        <Route path="signupuser" element={<SignUpUser />} />
        <Route path="signupcounselor" element={<SignUpCounselor />} />
        <Route path="getstarted" element={<GetStarted />} />
        <Route path="bookasession" element={<BookASession />} />
      </Route>
      
      <Route path={"/"} element={<GlobalLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Service />} />
        <Route path="support" element={<Support />} />
      </Route>
      <Route path={"/"}>
        <Route index element={<UserDashboard />} />
        <Route path="userdashboard" element={<UserDashboard />} />
      </Route>
      <Route path={"/"}>
        <Route index element={<CounselorDashbord />} />
        <Route path="counselordashboard" element={<CounselorDashbord />} />
      </Route>

    </Routes>
  );
};

export default App;
