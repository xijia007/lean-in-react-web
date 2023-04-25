import React from 'react';
import { useNavigate } from 'react-router-dom';
import JobKeyFacts from './job-key-facts';
import * as ROUTES from 'constants/routes';
import COMPANY_ID from 'constants/company';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';


function JobSummaryItem({ job }) {
  const navigate = useNavigate();
  const { job_id, image, company_name } = job;
  const imageSrc = image || `https://logo.clearbit.com/${company_name}.com`;
  const companyProfileLink = `${ROUTES.COMPANY_PROFILE}/${
    COMPANY_ID[company_name.toUpperCase()]
  }`;
  const NavigateJobDetails = () => navigate(`/search-details/${job_id}`);
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-2 text-center">
        <LinkContainer to={companyProfileLink}>
            <Nav.Link>
              <img src={imageSrc}
                onError={(e) => {
                  e.target.src = '/images/default_logo.jpg';
                }} // set default image URL
                alt="Company Logo"
                className="img-fluid"
                width={120}/>
            </Nav.Link>
          </LinkContainer>
        </div>
        <div className="col-8">
          <JobKeyFacts {...job} />
        </div>
        <div className="col-2 d-flex align-items-center">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => {
              NavigateJobDetails();
            }}
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
}
export default JobSummaryItem;
