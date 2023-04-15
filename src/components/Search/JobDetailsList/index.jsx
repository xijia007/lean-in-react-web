import React from 'react';
import JobDetailItem from './job-details-item';
// import jobs from '../reducer/jobs';
import { useSelector } from 'react-redux';

const JobDetailsList = () => {
  const jobsArray = useSelector(state => state.jobs);
  console.log("for job details list: ",jobsArray)
  return (
        <div className="list-group">
          {jobsArray.map(job => 
            <JobDetailItem key={job._id} {...job} />
            )}
        </div>
    );
}
export default JobDetailsList;

// const JobDetailsList = () => {
//   const jobsArray = useSelector(state => state.jobs);
//   console.log(jobsArray)
//   return (
//         <div className="list-group">
//           {jobs.map(job => 
//             <JobDetailItem key={job._id} {...job} />
//             )}
//         </div>
//     );
// }
// export default JobDetailsList;