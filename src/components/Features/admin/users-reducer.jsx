import { createSlice } from "@reduxjs/toolkit";
import { deleteUserThunk, findAllUsersThunk, updateUserThunk } from "../../../services/user-thunk.js";

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
      state.users = state.users.map((user) => user.id === action.payload.id ? action.payload : user)
    },
    [deleteUserThunk.fulfilled]: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
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
    }
      
  }
});

export default usersSlice.reducer;
export const {updateUserRole } =
usersSlice.actions;