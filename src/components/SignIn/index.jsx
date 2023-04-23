import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../Firebase/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { findUser } from '../../services/user-service';
import { setUpUserId, setUpUserPassword } from '../Features/Login/LoginSlice';
import { updateUser } from '../Features/Profile/user-reducer.jsx';
import { recordCurrentUserThunk } from '../../services/user-thunk.js';
import * as ROUTES from '../../constants/routes';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user_id: email, user_password: password } = useSelector(
    (state) => state.login
  );

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('userCredential', userCredential);
      const { uid } = userCredential.user;
      const userData = await findUser(uid);
      // dispatch(recordCurrentUserThunk(userData));
      userData.isLogined = true;
      dispatch(updateUser(userData));
      localStorage.setItem('userData', JSON.stringify(userData));
      const { role } = userData;
      navigate(ROUTES.HOME);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
   
  };

  const emailOnChange = (event) => {
    dispatch(setUpUserId(event.target.value));
  };

  const passwordOnChange = (event) => {
    dispatch(setUpUserPassword(event.target.value));
  };

  const submitStatus = useSelector((state) => state.login.submitStatus);

  return (
    <div className="Auth-form-container">
  <form className="Auth-form">
    <div className="Auth-form-content">
      <h3 className="Auth-form-title">Sign In!</h3>
      <div className="form-group mt-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control mt-1"
          placeholder="Enter email"
          onChange={emailOnChange}
        />
      </div>
      <div className="form-group mt-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control mt-1"
          placeholder="Enter password"
          onChange={passwordOnChange}
        />
      </div>


      <div className="d-grid gap-2 mt-3">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onLogin}
          disabled={!submitStatus}
        >
          Submit
        </button>
      </div>
      <p className="forgot-password text-right mt-2">
        <a href="/signup">Sign up?</a>
      </p>
    </div>
  </form>
</div>
  );
}

export default SignIn;
