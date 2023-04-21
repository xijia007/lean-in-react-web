/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';

import { findAllUsersThunk } from '../../services/user-thunk.js';

import * as ROUTES from '../../constants/routes';
import JobsSideBar from '../JobsSideBar/index.jsx';
import ProfileCard from '../Home/ProfileCard.jsx';
import RecentJobLists from '../Home/recentJobLists/index.jsx';

function UserHome() {
  return (
    <div className="container">
      <h2>Hi, LeanIn Job Seeker</h2>

      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <ProfileCard />
        </div>
        <div
          className="col-9 col-md-10 col-lg-7 col-xl-6"
          style={{ position: 'relative' }}
        >
          <RecentJobLists />
        </div>
        <div className="col-3 col-lg-2 col-xl-4">
          <JobsSideBar />
        </div>
      </div>
    </div>
  );
}

export default UserHome;
