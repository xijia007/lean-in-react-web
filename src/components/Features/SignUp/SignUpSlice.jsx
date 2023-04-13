import { createSlice } from '@reduxjs/toolkit';

const updateSubmitStatus = (state) => {
  state.submitStatus =
    state.firstNameStatus &&
    state.lastNameStatus &&
    state.emailStatus &&
    state.passwordStatus &&
    state.retypePasswordStatus;
};
export const signUpSlice = createSlice({
  name: 'signup',
  initialState: {
    firstNameStatus: false,
    firstName: '',
    lastNameStatus: false,
    lastName: '',
    emailStatus: false,
    email: '',
    passwordStatus: false,
    password: '',
    retypePasswordStatus: false,
    submitStatus: false,
    orgnization: '',
  },
  reducers: {
    checkFirstName: (state, action) => {
      const name = action.payload;
      if (name !== '' && name != null) {
        state.firstNameStatus = true;
      } else {
        state.firstNameStatus = false;
      }
      state.firstName = name;
      updateSubmitStatus(state);
    },
    checkLastName: (state, action) => {
      const name = action.payload;
      if (name !== '' && name != null) {
        state.lastNameStatus = true;
      } else {
        state.lastNameStatus = false;
      }
      state.lastName = name;
      updateSubmitStatus(state);
    },
    checkEmailAddress: (state, action) => {
      const address = action.payload;
      const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
      state.emailStatus = emailRegex.test(address);
      state.email = address;
      updateSubmitStatus(state);
    },
    checkPassword: (state, action) => {
      const password = action.payload;
      state.password = password;
      if (password !== '' && password != null) {
        state.passwordStatus = true;
      } else {
        state.passwordStatus = false;
      }
      updateSubmitStatus(state);
    },
    checkRetypePassword: (state, action) => {
      const password = action.payload;
      state.retypePasswordStatus = password === state.password;
      updateSubmitStatus(state);
    },
    updateOrgnization: (state, action) => {
      const org = action.payload;
      state.orgnization = org;
    },
  },
});

export const {
  checkEmailAddress,
  checkFirstName,
  checkLastName,
  checkPassword,
  checkRetypePassword,
  updateOrgnization,
} = signUpSlice.actions;

export default signUpSlice.reducer;
