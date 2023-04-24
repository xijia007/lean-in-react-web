import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { removeUser } from '../Features/Profile/user-reducer';

function SignOut() {
  const { isLogined } = useSelector((state) => state.userInfo.user);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    if (isLogined) {
      signOut(auth)
        .then(() => {
          localStorage.removeItem('userData');
          dispatch(removeUser());
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
