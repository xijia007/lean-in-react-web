import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Features/Login/LoginSlice';
import signupReducer from '../Features/SignUp/SignUpSlice';
import educationReducer from '../Features/Profile/education-reducer';

import postJobReducer from "../Features/CompanyHome/postJob-reducer.jsx";
import experienceReducer from '../Features/Profile/experience-reducer';
import AppliedJobsReducer from '../Features/AppliedSavedJobs/applied-jobs-reducer';
import SavedJobsReducer from '../Features/AppliedSavedJobs/saved-jobs-reducer';
import jobsReducer from '../Search/reducer/jobs-reducer';
// import DBjobsReducer from '../Home/reducer/DBjobs-reducer';
// import RecruiterJobsReducer from '../Home/reducer/RecruiterJobs-reducer';
import userReducer from '../Features/Profile/user-reducer.jsx';
import usersReducer from '../Features/admin/users-reducer.jsx';
import companyReducer from "../Features/Company/company-reducer.js";
import RecruiterJobsReducer from "../Features/Home/RecruiterJobs-reducer.jsx";
import DBjobsReducer from "../Features/Home/DBjobs-reducer.jsx";


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
    postjobs: postJobReducer,
    company: companyReducer,
  },
});
