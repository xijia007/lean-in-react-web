import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Features/Login/LoginSlice';
import signupReducer from '../Features/SignUp/SignUpSlice';
import educationReducer from '../Features/Profile/education-reducer.jsx';
import experienceReducer from '../Features/Profile/experience-reducer.jsx';
import AppliedJobsReducer from '../Features/AppliedSavedJobs/applied-jobs-reducer.jsx';
import SavedJobsReducer from '../Features/AppliedSavedJobs/saved-jobs-reducer.jsx';
import jobsReducer from '../Search/reducer/jobs-reducer.jsx';
import usersReducer from "../Features/Profile/users-reducer.jsx";

export default configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    userInfo: usersReducer,
    education: educationReducer,
    experience: experienceReducer,
    appliedJobs: AppliedJobsReducer,
    savedJobs: SavedJobsReducer,
    jobs: jobsReducer,
  },
});
