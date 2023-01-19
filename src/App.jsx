import Heropage from "./component/Heropage/Heropage";
// import './App.css';

import { Route, Routes } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<Heropage />} />
      </Route>
    </Routes>
  );
};

export default App;
