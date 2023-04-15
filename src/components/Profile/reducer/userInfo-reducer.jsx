import { createSlice } from '@reduxjs/toolkit';
import user from './user';

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

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});
export default userInfoSlice.reducer;
export const { updateUserInfo } = userInfoSlice.actions;
