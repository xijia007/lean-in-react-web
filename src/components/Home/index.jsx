import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../Firebase/firebase';

import CompanyHome from '../CompanyHome/index.jsx';
import AdminHome from '../AdminHome/index.jsx';
import UserHome from '../UserHome/index.jsx';

import {
  findUsers,
  findUser,
  removeCurrentUser,
} from '../../services/user-service';

function Home() {
  const { user } = useSelector((state) => state.userInfo);
  const { role } = user;
  const isAdmin = role === 'admin';
  const isUser = role === 'user';
  const isCompany = role === 'company';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // dispatch(removeCurrentUser());
        localStorage.removeItem('userData');
        navigate('/');
        console.log('Signed out successfully');
      })
      .catch((error) => {
        console.error(error);
        // An error happened.
      });
  };
  useEffect(() => {
    // eslint-disable-next-line no-shadow
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const { email } = user;
        // ...
        console.log('email', email);
      } else {
        // User is signed out
        // ...
        console.log('user is logged out');
      }
    });
  }, []);

  const email = auth?.currentUser?.email;
  // const { email } = user ?? undefined;
  console.log('email', email);

  return (
    <>
      {isUser && (
        <nav>
          <h2>
            Welcome to LeanIn, <span style={{ color: 'blue' }}>{email}</span>
          </h2>
          <UserHome />

          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </nav>
      )}
      {isCompany && (
        <nav>
          <h2>
            Welcome to LeanIn, <span style={{ color: 'blue' }}>{email}</span>
          </h2>

          <CompanyHome />
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </nav>
      )}
      {isAdmin && (
        <nav>
          <h2>
            Welcome to LeanIn, <span style={{ color: 'blue' }}>{email}</span>
          </h2>
          <AdminHome />
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </nav>
      )}
    </>
  );
}

export default Home;
