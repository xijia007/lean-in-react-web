import React from 'react';
import { useSelector } from 'react-redux';
import JobDetailItem from './job-details-item';

function JobDetailsList() {
  const jobsArray = useSelector((state) => state.jobs);
  return (
    <div className="list-group">
      {jobsArray.map((job) => (
        <JobDetailItem key={job._id} {...job} />
      ))}
    </div>
  );
}
export default JobDetailsList;
