import { createSlice } from '@reduxjs/toolkit';
import user from './user.jsx';
import { updateUserThunk } from "../../../services/user-thunk.js";

// const initialState = { user };
const initialState = {
  user: {
    firstName: '',
    role: 'user',
    isLogined: false,
  },
};

console.log(user);

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
    [updateUserThunk.fulfilled]: (state, action) => {
      state.users = {...action.payload, isLogined: true}
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
