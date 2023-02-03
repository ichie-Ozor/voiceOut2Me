import { createSlice } from "@reduxjs/toolkit";
import counselors from "../../util/counselorsInfor";
const counselor = counselors;
const counselorsSlice = createSlice({
  name: "Counselors",
  initialState: {
    value: {
      counselor,
    },
    reducers: {},
  },
});

export default counselorsSlice.reducer;
