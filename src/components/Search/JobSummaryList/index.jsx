import React from 'react';
import { useSelector } from 'react-redux';
import JobSummaryItem from './job-summary-item';
// import jobs from '../reducer/jobs';

function JobSummaryList() {
  const { jobs } = useSelector((state) => state.jobs);
  console.log('for JobSummaryList: ', jobs);
  return (
    <div className="list-group">
      {Array.isArray(jobs) &&
        jobs.map(
          (job) => <JobSummaryItem key={job.id} {...job} />
          // JobSummaryItem(job)
        )}
    </div>
  );
}
export default JobSummaryList;

// const JobSummaryList = () => {
//   return (
//         <div className="list-group">
//           {jobs.map(job =>
//             <JobSummaryItem key={job._id} {...job} />
//             // JobSummaryItem(job)
//             )}
//         </div>
//     );
// }
// export default JobSummaryList;
