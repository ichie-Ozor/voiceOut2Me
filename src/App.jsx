import { Route, Routes } from "react-router";
import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import SoonComingPage from "./pages/SoonComingPage";

const App = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<Home/>} />
        <Route path="sooncomingpage" element={<SoonComingPage/>}/>
        <Route path="getstarted" element={<GetStarted/>}/>
      </Route>
    </Routes>
  );
};

export default App;
