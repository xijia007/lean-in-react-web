import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JobKeyFacts from '../JobSummaryList/job-key-facts';
import CompanyImage from '../JobSummaryList/company-image';
import { addSavedJob } from '../../Features/AppliedSavedJobs/saved-jobs-reducer.jsx';
// import { applyJob } from '../../Features/AppliedSavedJobs/applied-jobs-reducer.jsx';
// import * as ROUTES from 'constants/routes';
// import COMPANY_ID from 'constants/company';
// import Nav from 'react-bootstrap/Nav';
// import { LinkContainer } from 'react-router-bootstrap';

function JobDetailItem(job) {
  const { jobs: savedJobs } = useSelector((state) => state.savedJobs);
  const { jobs: appliedjobs } = useSelector((state) => state.appliedJobs);
  const dispatch = useDispatch();
  const onJobSave = (job) => {
    dispatch(saveJob(job));
    console.log('savedJob: ', job);
  };
  const onJobApply = (job) => {
    dispatch(applyJob(job));
    console.log('appliedJob: ', job);
  };

  // const { job_id, image, company_name } = job;
  // const companyProfileLink = `${ROUTES.COMPANY_PROFILE}/${
  //   COMPANY_ID[company_name.toUpperCase()]
  // }`;

  return (
    <div className="list-group-item">
      <div className="row">
        {/* <div className="col-2 text-center">
          <LinkContainer to={companyProfileLink}>
              <Nav.Link> */}
                <CompanyImage {...job} />
              {/* </Nav.Link>
          </LinkContainer> */}
        </div>
        <div className="col-10">
          <JobKeyFacts {...job} />
          <div className="row">
            <div className="col-12 mt-3">
              <b>Job Description: </b>
              <p className="m-3">{job.description}</p>
            </div>
          </div>
          <div className="row">
            <button
              type="button"
              onClick={() => onJobApply(job)}
              className="btn btn-primary col m-3"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={() => onJobSave(job)}
              className="btn btn-outline-secondary col m-3"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default JobDetailItem;
