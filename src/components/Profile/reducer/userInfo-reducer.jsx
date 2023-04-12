import {createSlice} from "@reduxjs/toolkit";
import user from "./user";

const initialState = {user};


const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        updateUserInfo: (state, action) => {
            state.user = action.payload;
        },

    },
});
export default userInfoSlice.reducer;
export const {updateUserInfo} = userInfoSlice.actions;