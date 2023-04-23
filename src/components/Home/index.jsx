import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import Nav from 'react-bootstrap/Nav';
// import { LinkContainer } from 'react-router-bootstrap';
import { auth } from '../Firebase/firebase';

import CompanyHome from '../CompanyHome';
import AdminHome from '../AdminHome';
import UserHome from '../UserHome';

// import { addDBJob } from './reducer/DBjobs-reducer';
import { addJob } from '../Search/reducer/jobs-reducer';
import { addSavedJob } from '../Features/AppliedSavedJobs/saved-jobs-reducer';

import { getUserSavedJobs } from '../../services/user-service';
import { getAllJobsSearch } from '../../services/job-service';
import VisiterHome from '../VisiterHome';
import * as ROUTES from '../../constants/routes';
import { addDBJob } from "../Features/Home/DBjobs-reducer.jsx";

function Home() {
  const { user } = useSelector((state) => state.userInfo);
  const { role, isLogined, uid } = user;
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
    async function fetchAllJobsSearch() {
      const jobResponse = await getAllJobsSearch();

      const sortedJobs = jobResponse.sort(
        (a, b) => Date.parse(b.post_time) - Date.parse(a.post_time)
      );
      sortedJobs.forEach((job) => {
        dispatch(addJob(job));
      });
      const sortedJobsSlice = sortedJobs.slice(0, 10);
      sortedJobsSlice.forEach((job) => {
        dispatch(addDBJob(job));
      });
    }
    async function fetchSavedJobs() {
      const jobResponse = await getUserSavedJobs(uid);

      jobResponse.forEach((job) => {
        // console.log(job);
        dispatch(addSavedJob(job));
      });
    }

    fetchAllJobsSearch();
    fetchSavedJobs();
  }, [dispatch, uid]);

  const email = auth?.currentUser?.email;
  console.log('visiter?', !(isUser || isCompany || isAdmin));
  return (
    <div className="container-fluid">
      {isUser && isLogined && (
        <nav>
          <h2 className='wd-greeting'>
            Welcome to LeanIn, <span className="text-primary">{email}</span> 
            <br/>You're logged in as a Job Seeker.
          </h2>
          <UserHome />
          <div>
            <button className="btn btn-danger float-end" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </nav>
      )}
      {isCompany && isLogined && (
        <nav>
          <h2 className='wd-greeting'>
            Welcome to LeanIn, <span className="text-primary">{email}</span>
            <br/>You're logged in as a Company.
          </h2>

          <CompanyHome />
          <div>
            <button className="btn btn-danger float-end" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </nav>
      )}
      {isAdmin && isLogined && (
        <nav>
          <h2 className='wd-greeting'>
            Welcome to LeanIn, <span className="text-primary">{email}</span>
            <br/>You're logged in as an Admin.
          </h2>
          <AdminHome />
          <div>
            <button className="btn btn-danger float-end" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </nav>
      )}

      {!isLogined && (
        <nav>
          <h2>Hi, LeanIn Visiter</h2>
          <h6>
            Welcome to LeanIn, <Link to={ROUTES.SIGN_UP}>Sign up</Link> or{' '}
            <Link to={ROUTES.SIGN_IN}>Sign in </Link>
          </h6>
          <VisiterHome />
        </nav>
      )}
    </div>
  );
}

export default Home;
