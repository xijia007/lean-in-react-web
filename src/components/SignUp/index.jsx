import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import * as ROUTES from '../../constants/routes';

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessageAlert, setErrorMessageAlert] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        console.log(user);
        navigate('/login');
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const [, errorMessage] = error.message.split(': ');

        setErrorMessageAlert(errorMessage);
        // ..
      });
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <h1> LeanIn </h1>
            <h2> Sign Up New Account </h2>
            <form>
              <div>
                <label htmlFor="email-address">
                  Email address
                  <input
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                  />
                </label>
              </div>

              <div>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                  />
                </label>
              </div>

              <button type="submit" onClick={onSubmit}>
                Sign up
              </button>
              <div>{errorMessageAlert}</div>
            </form>

            <p>
              Already have an account?
              <NavLink to={ROUTES.SIGN_IN}>Sign in</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Signup;
