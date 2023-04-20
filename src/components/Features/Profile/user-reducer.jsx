import { createSlice } from '@reduxjs/toolkit';
// import user from './user.jsx';
import {
  currentUserProfileThunk,
  findUserThunk,
  recordCurrentUserThunk,
  removeCurrentUserThunk,
  updateUserThunk,
} from '../../../services/user-thunk.js';

// const initialState = { user };

const storedUserDataRaw = localStorage.getItem('userData');
const storedUserData = storedUserDataRaw
  ? { user: JSON.parse(storedUserDataRaw) }
  : null;
const initialState = storedUserData ?? {
  user: { firstName: '', role: 'user', isLogined: false },
};

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
      console.log('fulfilled recordCurrentUserThunk', state.user);
    },
    [removeCurrentUserThunk.fulfilled]: (state, action) => {
      state.user = { firstName: '', role: 'user' };
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
    removeUser: (state) => {
      state.user = { firstName: '', role: 'user', isLogined: false };
    },
  },
});
export default usersSlice.reducer;
export const { updateUser, removeUser } = usersSlice.actions;
