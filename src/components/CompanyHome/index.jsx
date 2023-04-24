import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import PostedJobsComponent from './postedJob';
// import PostJob from './postJob';
import useFetchJobs from 'customhooks/fetchJob';
import { updateJob } from 'reducers/jobs-reducer';
import { getAllJobs } from '../../services/job-service';
import { findCompany } from '../../services/company-service.js';
import { findCompanyThunk } from '../../services/company-thunk.js';
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

    async function fetchDBjobs() {
      const jobs = await getAllJobs();

      const filteredJobs = jobs.filter(
        (job) => job.company_name === companyInfo.name
      );

      filteredJobs.forEach((job) => {
        dispatch(updateJob(job));
      });
    }
    fetchDBjobs();
    fetchCompany();
  }, [companyId, companyInfo.name, dispatch, userCompanyId]);

  return (
    <div className="container">
      <CompanyJobLists companyName={companyInfo.name} lite />
    </div>
  );
}

export default CompanyHome;
