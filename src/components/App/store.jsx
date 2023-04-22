import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Features/Login/LoginSlice';
import signupReducer from '../Features/SignUp/SignUpSlice';
import educationReducer from '../Features/Profile/education-reducer';
import experienceReducer from '../Features/Profile/experience-reducer.jsx';
import AppliedJobsReducer from '../Features/AppliedSavedJobs/applied-jobs-reducer.jsx';
import SavedJobsReducer from '../Features/AppliedSavedJobs/saved-jobs-reducer.jsx';
import jobsReducer from '../Search/reducer/jobs-reducer.jsx';
import DBjobsReducer from '../Features/Home/DBjobs-reducer';
import RecruiterJobsReducer from '../Features/Home/RecruiterJobs-reducer';

import userReducer from '../Features/Profile/user-reducer.jsx';
import usersReducer from '../Features/admin/users-reducer.jsx';
import postedJobsReducer from "../Features/CompanyHome/postedJobs-reducer.jsx";
import postJobReducer from "../Features/CompanyHome/postJob-reducer.jsx";

export default configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    userInfo: userReducer,
    education: educationReducer,
    experience: experienceReducer,
    appliedJobs: AppliedJobsReducer,
    savedJobs: SavedJobsReducer,
    jobs: jobsReducer,
    DBjobs: DBjobsReducer,
    Recruiterjobs: RecruiterJobsReducer,
    users: usersReducer,
    postedJobs: postedJobsReducer,
    postjobs: postJobReducer,

  },
});
