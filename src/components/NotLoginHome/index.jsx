import React, { useEffect, useState } from 'react';

import { findAllUsersThunk } from '../../services/user-thunk.js';

import * as ROUTES from '../../constants/routes';

function NotLoginHome() {
  return (
    <div className="container">
      <h2>Hi, Please sign up to explore more </h2>
      <h1>Not Login Home Page</h1>
    </div>
  );
}

export default NotLoginHome;
