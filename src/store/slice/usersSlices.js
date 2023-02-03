import { createSlice } from "@reduxjs/toolkit";
import usersInfo from "../../util/usersInfo";
const users = usersInfo;

const usersSlice = createSlice({
  name: "Users",
  initialState: {
    value: {
      users,
    },
  },
  reducers: {
    addToUsers: (state, action) => {
      state.value.users.push(action.payload);
    },

  },

});
export const { addToUsers } = usersSlice.actions;
export default usersSlice.reducer;
