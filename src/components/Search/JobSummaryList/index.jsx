import React from 'react';
import JobSummaryItem from './job-summary-item';

function JobSummaryList({ jobs }) {
  return (
    <div className="list-group">
      {Array.isArray(jobs) &&
        jobs.length > 0 &&
        jobs.map((job) => <JobSummaryItem key={job.job_id} job={job} />)}
    </div>
  );
}
export default JobSummaryList;
