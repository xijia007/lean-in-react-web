import React from 'react';
import JobSummaryItem from './job-summary-item';
import jobs from './jobs';

const JobSummaryList = () => {
  return (
        <div className="list-group">
          {jobs.map(job => 
            <JobSummaryItem key={job._id} {...job} />
            // JobSummaryItem(job)
            )}
        </div>
    );
}
export default JobSummaryList;