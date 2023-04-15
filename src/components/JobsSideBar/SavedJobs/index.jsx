import React from 'react';
import { useSelector } from "react-redux";
import { ArrowRight, ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

const SavedJobsComponent = () => {
  const {jobs} = useSelector((state) => state.savedJobs)
  const navigate = useNavigate();
  const NavigateJobDetails = (id) => navigate(`/search-details/${id}`)

  return(
    <div className="list-group">
      <div className="list-group-item"><h4>Saved Jobs</h4></div>
      {jobs && jobs.map((job) =>
        <div key={job._id} className="list-group-item d-flex justify-content-between">
          <div>
            <h6>{job.jobTitle}</h6>
            <span className="text-secondary">{job.company}</span>
          </div>
          <div className="clickable mt-2"
               onClick={() => NavigateJobDetails(job._id)}>
            <h4><ChevronRight/></h4>
          </div>
        </div>)}
    </div>
  );
};

export default SavedJobsComponent;