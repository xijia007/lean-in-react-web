import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Features/Login/LoginSlice';
import signupReducer from '../Features/SignUp/SignUpSlice';
import userInfoReducer from "../Profile/reducer/userInfo-reducer.jsx";
import educationReducer from "../Profile/reducer/education-reducer.jsx";
import experienceReducer from "../Profile/reducer/experience-reducer.jsx";

export default configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    userInfo: userInfoReducer,
    education: educationReducer,
    experience: experienceReducer,
  },
});
