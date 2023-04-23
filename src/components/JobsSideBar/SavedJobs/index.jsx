import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router';
// import { getUserSavedJobs } from '../../../services/user-service';
// import { addSavedJob } from '../../Features/AppliedSavedJobs/saved-jobs-reducer';

function SavedJobsComponent() {
  // const { uid } = useSelector((state) => state.userInfo.user);
  const { jobs: savedJobs } = useSelector((state) => state.savedJobs);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const NavigateJobDetails = (id) => navigate(`/search-details/${id}`);

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
