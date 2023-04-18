import { createSlice } from '@reduxjs/toolkit';
// import user from './user.jsx';
import {
  currentUserProfileThunk, findUserThunk,
  recordCurrentUserThunk,
  removeCurrentUserThunk,
  updateUserThunk
} from "../../../services/user-thunk.js";

// const initialState = { user };
const initialState = {
  user: {firstName: '', role: 'user',},
  isLogined: false,
};

// const initialState2 = {
//   userName: 'testUser',
//   password: 'password',
//   firstName: 'Test',
//   lastName: 'User',
//   email: 'user@email.com',
//   skills: 'HTML, CSS, JS',
//   bio: 'Student of webdev class SP2023',
//   jobsApplied: 20,
//   jobsSaved: 20,
//   role: 'user',
// };

// console.log(initialState2);

const usersSlice = createSlice({
  name: 'userInfo',
  initialState,
  extraReducers: {
    [findUserThunk.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [updateUserThunk.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [recordCurrentUserThunk.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLogined = true;
      console.log("fulfilled recordCurrentUserThunk", state.user);
    },
    [removeCurrentUserThunk.fulfilled]: (state, action) => {
      state.user = {firstName: '', role: 'user',};
      state.isLogined = false;
    },
    [currentUserProfileThunk.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export default usersSlice.reducer;
export const { updateUser } = usersSlice.actions;
