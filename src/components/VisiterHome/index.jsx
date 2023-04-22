import React, { useEffect, useState } from 'react';

import { findAllUsersThunk } from '../../services/user-thunk.js';

import * as ROUTES from '../../constants/routes';
import JobsSideBar from '../JobsSideBar/index.jsx';
import ProfileCard from '../Home/ProfileCard.jsx';
import RecentJobLists from '../Home/recentJobLists/index.jsx';

function VisiterHome() {

  return (
    <div>
      <div
        className="col"
        style={{ position: 'relative' }}
      >
        <RecentJobLists />
      </div>

    </div>
  );
}

export default VisiterHome;