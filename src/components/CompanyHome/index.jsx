import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PostedJobsComponent from './postedJob';
import PostJob from './postJob';
import { findCompany } from '../../services/company-service.js';
import { findCompanyThunk } from '../../services/company-thunk.js';

function CompanyHome() {
  const userInfo = useSelector((state) => state.userInfo.user);
  return (
    <div className="container">
      {/* <h2>Hi, LeanIn Company</h2> */}
      <h1>Company Home Page</h1>
      <div className="row">
        <div className="col-9">
          <div className="list-group">
            <div className="list-group-item p-3">
              <div>
                <PostJob />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <PostedJobsComponent />
        </div>
      </div>
    </div>
  );
}

export default CompanyHome;
