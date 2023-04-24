import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import PostedJobsComponent from './postedJob';
// import PostJob from './postJob';
import { findCompany } from '../../services/company-service.js';
import { findCompanyThunk } from '../../services/company-thunk.js';
import useFetchJobs from 'customhooks/fetchJob';
import CompanyJobLists from '../CompanyProfile/compnayJobLists.jsx';

function CompanyHome() {
  // const userInfo = useSelector((state) => state.userInfo.user);
  useFetchJobs();
  const { companyId } = useParams();
  const { company } = useSelector((state) => state.company);
  const { user } = useSelector((state) => state.userInfo);
  const { userCompanyId } = user;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMyCompany = companyId === undefined;
  const [companyInfo, setCompanyInfo] = useState(company);
  useEffect(() => {
    async function fetchCompany() {
      if (companyId) {
        const companyData = await findCompany(companyId);
        setCompanyInfo(companyData);
        return;
      }
      const response = await dispatch(findCompanyThunk(userCompanyId));
      setCompanyInfo(response.payload);
    }
    fetchCompany();
  }, [companyId, dispatch, userCompanyId]);

  return (
    <div className="container">
      <CompanyJobLists companyName={companyInfo.name} />
    </div>
  );
}

export default CompanyHome;
