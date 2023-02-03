import { createSlice } from "@reduxjs/toolkit";
import counselorsInfo from "../../util/counselorsInfor";
const counselor = counselorsInfo;
const counselorsSlice = createSlice({
  name: "Counselors",
  initialState: {
    value: {
      counselor,
      selectedCounselor:""
    },
  },
  reducers: {
    addToCounselors: (state, action) => {
      state.value.counselor.push(action.payload);
    },
    selectCounselor:(state,action)=>{
      state.value.selectedCounselor=action.payload
    }
  },
});
export const { addToCounselors,selectCounselor } = counselorsSlice.actions;
export default counselorsSlice.reducer;
