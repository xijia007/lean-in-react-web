import { createSlice } from "@reduxjs/toolkit";
import { deleteAuthUserThunk, findAllUsersThunk, updateUserThunk } from "services/user-thunk.js";

const initialState = {
  users: [],
  loading: false,
  error: null,
  role: '1'
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [updateUserThunk.fulfilled]: (state, action) => {
      state.users = state.users.map((user) => user.uid === action.payload.uid ? action.payload : user)
    },
    [deleteAuthUserThunk.fulfilled]: (state, action) => {
      state.users = state.users.filter((user) => {
        user.uid !== action.payload.uid;
        console.log("found delete user uid", user.uid !== action.payload.uid ? user : null)
      })
      console.log("delete user uid", action.payload.uid)
    },
    [findAllUsersThunk.pending]: (state, action) => {
      state.loading = true;
      state.users = [];
    },
    [findAllUsersThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [findAllUsersThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    
  },
  reducers: {
    updateUserRole(state,action){
      const role = action.payload;
      state.role = role;
    },
    deleteUser(state, action) {
      state.users = state.users.filter(u => u.uid !== action.payload);
    },
      
  }
});

export default usersSlice.reducer;
export const {updateUserRole, deleteUser } =
usersSlice.actions;