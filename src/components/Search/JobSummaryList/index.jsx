import React from 'react';
import JobSummaryItem from './job-summary-item';
// import jobs from '../reducer/jobs';
import { useSelector } from 'react-redux';

const JobSummaryList = () => {
  const jobsArray = useSelector(state => state.jobs);
  console.log("for JobSummaryList: ", jobsArray)
  return (
        <div className="list-group">
          {jobsArray.map(job => 
            <JobSummaryItem key={job._id} {...job} />
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