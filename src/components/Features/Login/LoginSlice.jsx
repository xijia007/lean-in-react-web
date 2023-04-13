import { createSlice } from '@reduxjs/toolkit';

const updateSubmitStatus = (state) => {
  state.submitStatus =
    state.user_id !== '' &&
    state.user_id != null &&
    state.user_password != null &&
    state.user_password !== '';
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user_id: '',
    user_type: '',
    logined: false,
    user_password: '',
    updateSubmitStatus: false,
  },
  reducers: {
    setUpUserId: (state, action) => {
      state.user_id = action.payload;
      updateSubmitStatus(state);
    },
    setUpUserPassword: (state, action) => {
      state.user_password = action.payload;
      updateSubmitStatus(state);
    },
    setUpUserType: (state, action) => {
      state.user_type = action.payload;
    },
    loginIn: (state) => {
      state.logined = true;
    },
    loginOut: (state) => {
      state.user_id = '';
      state.user_type = '';
      state.logined = false;
    },
  },
});

export const {
  setUpUserId,
  setUpUserType,
  loginIn,
  loginOut,
  setUpUserPassword,
} = loginSlice.actions;

export default loginSlice.reducer;
