import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Features/Login/LoginSlice';
import signupReducer from '../Features/SignUp/SignUpSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
  },
});
