import { createSlice } from "@reduxjs/toolkit";
import counselorsInfo from "../../util/counselorsInfor";
const counselor = counselorsInfo;
const counselorsSlice = createSlice({
  name: "Counselors",
  initialState: {
    value: {
      counselor,
    },
  },
  reducers: {
    addToCounselors: (state, action) => {
      state.value.counselor.push(action.payload);
    },
  },
});
export const { addToCounselors } = counselorsSlice.actions;
export default counselorsSlice.reducer;
