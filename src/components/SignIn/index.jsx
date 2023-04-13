import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUpUserId,
  setUpUserPassword,
} from '../Features/Login/LoginSlice';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const OnLogin = (e) => {
    const email = useSelector((state) => state.login.user_id);
    const password = useSelector((state) => state.login.user_password);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        navigate('/');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const emailOnChange = (event) => {
    dispatch(setUpUserId(event.target.value));
  };

  const passwordOnChange = (event) => {
    dispatch(setUpUserPassword(event.target.value));
  };

  const submitStatus = useSelector((state)=>state.login.submitStatus)

  return (
    <>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
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
            <button type="submit" className="btn btn-primary" onClick={OnLogin} disabled={!submitStatus}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            <a href="/signup">Sign up?</a>
          </p>
        </div>
      </form>
    </div>
    </>
  );
}

export default SignIn;
