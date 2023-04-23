import { configureStore } from '@reduxjs/toolkit';
import DBjobsReducer from '../../reducers/DBjobs-reducer';
import loginReducer from '../Features/Login/LoginSlice';
import signupReducer from '../Features/SignUp/SignUpSlice';
import educationReducer from '../Features/Profile/education-reducer';

import postJobReducer from '../Features/CompanyHome/postJob-reducer';
import experienceReducer from '../Features/Profile/experience-reducer';
import AppliedJobsReducer from '../Features/AppliedSavedJobs/applied-jobs-reducer';
import SavedJobsReducer from '../Features/AppliedSavedJobs/saved-jobs-reducer';
import jobsReducer from '../../reducers/jobs-reducer';

// import RecruiterJobsReducer from '../Home/reducer/RecruiterJobs-reducer';
import userReducer from '../Features/Profile/user-reducer';
import usersReducer from '../Features/admin/users-reducer';
import companyReducer from '../Features/Company/company-reducer';

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
    // Recruiterjobs: RecruiterJobsReducer,
    users: usersReducer,
    postjobs: postJobReducer,
    company: companyReducer,
  },
});
