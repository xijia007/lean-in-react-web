import React from 'react';
import { useSelector } from "react-redux";
import { ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

const AppliedJobsComponent = () => {
  const {appliedJobs} = useSelector((state) => state.appliedJobs)
  const navigate = useNavigate();
  const NavigateJobDetails = (id) => navigate(`/search-details/${id}`)
  console.log("appliedJobs: ", appliedJobs)
  return(
    <div className="list-group">
      <div className="list-group-item"><h4>Applied Jobs</h4></div>
      {appliedJobs && appliedJobs.map((job) =>
        <div key={job._id} className="list-group-item d-flex justify-content-between">
          <div>
            <h6>{job.title}</h6>
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

export default AppliedJobsComponent;