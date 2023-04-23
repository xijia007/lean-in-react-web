import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../Firebase/firebase';
import {
  checkEmailAddress,
  checkFirstName,
  checkLastName,
  checkPassword,
  checkRetypePassword,
  updateOrgnization,
} from '../Features/SignUp/SignUpSlice';
import { updateUserRole } from '../Features/Profile/user-reducer';
import { createUser } from '../../services/user-service';
import { useState } from 'react';
function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState('user');
  const handleFirstNameChange = (event) => {
    dispatch(checkFirstName(event.target.value));
  };
  const handleLastNameChange = (event) => {
    dispatch(checkLastName(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(checkEmailAddress(event.target.value));
  };
  const handleOrgChange = (event) => {
    dispatch(updateOrgnization(event.target.value));
  };
  const handlePasswordChange = (event) => {
    dispatch(checkPassword(event.target.value));
  };
  const handleRetypePwdChange = (event) => {
    dispatch(checkRetypePassword(event.target.value));
  };

  const handleRoleButtonClick = (event) =>{
   const id = event.target.id;
   setSelectedButton(id);
   dispatch(updateUserRole(id));
  }
  const submitStatus = useSelector((state) => state.signup.submitStatus);
  const { email, password, firstName, lastName, orgnization } = useSelector(
    (state) => state.signup
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
      firstName,
      lastName,
      orgnization,
    };

    console.log(user);
    await createUser(user)
      .then((res) => {
        console.log(res);
        navigate('/signin');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              onChange={handleLastNameChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Organization</label>
            <input
              type="text"
              className="form-control mt-1"
              onChange={handleOrgChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Retype Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Retype password"
              onChange={handleRetypePwdChange}
            />
          </div>
        

        <Form>
        <div className="mb-3">
      <Form.Check
        type="radio"
        id="admin"
        name="role"
        label="Web Admin"
        onClick={handleRoleButtonClick}
        checked={selectedButton === 'admin'}
      />

      <Form.Check
        type="radio"
        id="user"
        name="role"
        label="Job Seeker"
        onClick={handleRoleButtonClick}
        checked={selectedButton === 'user'}
      />

      <Form.Check
        type="radio"
        id="company"
        name="role"
        label="Company"
        onClick={handleRoleButtonClick}
        checked={selectedButton === 'company'}
      />
    </div>
    </Form>
      
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!submitStatus}
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
