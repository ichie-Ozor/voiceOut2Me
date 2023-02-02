import { createSlice } from "@reduxjs/toolkit";
import users from "../../util/users";
const user =users
const usersSlice=createSlice({
    name:"Users",
    initialState:{
        value:{
            user,

        },
        reducers:{

        }
    }
})

export default usersSlice.reducer