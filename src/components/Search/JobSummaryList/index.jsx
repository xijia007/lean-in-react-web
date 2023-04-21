import React from 'react';
import JobSummaryItem from './job-summary-item';
// import jobs from '../reducer/jobs';
import { useSelector } from 'react-redux';

const JobSummaryList = ({jobs}) => {
  // const jobs = results.jobs
  console.log("results PASSED", jobs)
  console.log("results is array?", Array.isArray(jobs));
  // const jobsArray = useSelector(state => state.jobs);
  // console.log("for JobSummaryList: ", jobsArray)
  return (
        // <pre>{JSON.stringify(jobs, null, 2)}</pre>
        <div className="list-group">
          {Array.isArray(jobs)&&jobs.map(job => 
            <JobSummaryItem key={job.job_id} {...job} />
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