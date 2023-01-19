// import './App.css';

import { Route, Routes } from "react-router";
import SoonComingPage from "./pages/SoonComingPage";

const App = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<SoonComingPage />} />
      </Route>
    </Routes>
  );
};

export default App;
