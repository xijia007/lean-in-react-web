import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Features/Login/LoginSlice';
import signupReducer from '../Features/SignUp/SignUpSlice';
import userInfoReducer from '../Profile/reducer/userInfo-reducer.jsx';
import educationReducer from '../Profile/reducer/education-reducer.jsx';
import experienceReducer from '../Profile/reducer/experience-reducer.jsx';
import AppliedJobsReducer from '../JobsSideBar/reducer/applied-jobs-reducer.jsx';
import SavedJobsReducer from '../JobsSideBar/reducer/saved-jobs-reducer.jsx';
import jobsReducer from '../Search/reducer/jobs-reducer.jsx';

export default configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    userInfo: userInfoReducer,
    education: educationReducer,
    experience: experienceReducer,
    appliedJobs: AppliedJobsReducer,
    savedJobs: SavedJobsReducer,
    jobs: jobsReducer,
  },
});
