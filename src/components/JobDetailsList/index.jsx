import React from 'react';
import JobDetailItem from './job-details-item';
import jobs from '../JobSummaryList/jobs';

const JobDetailsList = (
) => {
  return (
        <div className="list-group">
          {jobs.map(job => 
            <JobDetailItem key={job._id} {...job} />
            )}
        </div>
    );
}
export default JobDetailsList;