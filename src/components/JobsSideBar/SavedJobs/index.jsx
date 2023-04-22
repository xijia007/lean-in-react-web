import React from 'react';
import { useSelector } from 'react-redux';
import { ArrowRight, ChevronRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router';

function SavedJobsComponent() {
  // const { savedJobs } = useSelector((state) => state.savedJobs);
  const { jobs: savedJobs } = useSelector((state) => state.savedJobs);
  const navigate = useNavigate();
  const NavigateJobDetails = (id) => navigate(`/search-details/${id}`);
  // console.log("savedJobs: ", savedJobs)
  return (
    <div className="list-group">
      <div className="list-group-item">
        <h5 className="fw-bold mt-2 mb-1">Saved Jobs</h5>
      </div>
      {savedJobs &&
        savedJobs.map((job) => (
          <div
            key={job.job_id}
            className="list-group-item d-flex justify-content-between"
          >
            <div>
              <h6 className="fw-bold">{job.title}</h6>
              <span>{job.company_name}</span>
            </div>
            <div
              className="clickable mt-2"
              onClick={() => NavigateJobDetails(job.job_id)}
            >
              <h4>
                <ChevronRight />
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SavedJobsComponent;
