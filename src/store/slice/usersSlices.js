import { createSlice } from "@reduxjs/toolkit";
import usersInfo from "../../util/usersInfo";
const users = usersInfo;

const usersSlice = createSlice({
  name: "Users",
  initialState: {
    value: {
      users,
      selectedUser:""
    },
  },
  reducers: {
    addToUsers: (state, action) => {
      state.value.users.push(action.payload);
    },
selectUser:(state,action)=>{
  state.value.selectedUser=action.payload
}
  },

});
export const { addToUsers,selectUser } = usersSlice.actions;
export default usersSlice.reducer;
