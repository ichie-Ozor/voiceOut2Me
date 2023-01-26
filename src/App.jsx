import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import SoonComingPage from "./pages/SoonComingPage";

const App = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<SoonComingPage />} />
        <Route path="home" element={<Home/>}/>
      </Route>
    </Routes>
  );
};

export default App;
