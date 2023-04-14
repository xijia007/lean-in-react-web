import React from 'react';
import JobSummaryItem from './job-summary-item';
import jobs from './jobs';

const JobSummaryList = (
  // {
  //   jobs = [
  //             {
  //                 "_id": 123,
  //                 "title": "Software Engineer",
  //                 "company": "Google",
  //                 "location": "San Francisco, CA",
  //                 "description": "We are looking for a Software Engineer to join our team. You will be responsible for developing and implementing functional programs.",
  //                 "apply": "https://www.google.com"
  //             },
  //             {
  //                 "_id": 234,
  //                 "title": "Machine Learning Engineer",
  //                 "company": "Facebook",
  //                 "location": "Menlo Park, CA",
  //                 "description": "We are looking for a Machine Learning Engineer to join our team @ meta.",
  //                 "apply": "https://www.facebook.com"
  //             },
  //             {
  //                 "_id": 345,
  //                 "title": "Data Scientist",
  //                 "company": "Amazon",
  //                 "location": "Seattle, WA",
  //                 "description": "We are looking for a Data Scientist to join our team @ amazon.",
  //                 "apply": "https://www.amazon.com"
  //             },
  //           ]
  // }
) => {
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