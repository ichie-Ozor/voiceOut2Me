import { configureStore } from "@reduxjs/toolkit";
import counselorsSlices from "./slice/counselorsSlices ";
import usersSlices from "./slice/usersSlices";

const Store = configureStore({
  reducer: {
    Users: usersSlices,
    Counselors:counselorsSlices,
  },
});

export default Store;
