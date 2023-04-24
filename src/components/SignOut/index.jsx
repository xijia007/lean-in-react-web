import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { removeUser } from '../Features/Profile/user-reducer';
import { clearExperience } from "components/Features/Profile/experience-reducer.jsx";
import { clearEducation } from "components/Features/Profile/education-reducer.js";
import { clearSavedJobs } from "components/Features/AppliedSavedJobs/saved-jobs-reducer.jsx";
import { clearAppliedJobs } from "components/Features/AppliedSavedJobs/applied-jobs-reducer.jsx";

function SignOut() {
  const { isLogined } = useSelector((state) => state.userInfo.user);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    if (isLogined) {
      signOut(auth)
        .then(() => {
          localStorage.removeItem('userData');
          dispatch(removeUser());
          dispatch(clearExperience());
          dispatch(clearEducation());
          dispatch(clearSavedJobs());
          dispatch(clearAppliedJobs());
          console.log('Signed out successfully');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    signOutHandler();
  }, []);

  return (
    <div>
      <h1>You just successfully log out.</h1>
      <img src="/images/haha.png" alt="sign out" className="sign_out" />
    </div>
  );
}

export default SignOut;
