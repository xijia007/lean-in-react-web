import React, { useEffect, useState } from 'react';

import { findAllUsersThunk } from '../../services/user-thunk.js';

import * as ROUTES from '../../constants/routes';

function CompanyHome() {
  return (
    <div className="container">
      <h1>Company Home Page</h1>
    </div>
  );
}

export default CompanyHome;
