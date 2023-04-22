import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecentJobItem from './recentJobItem';
import { getAllJobsSearch } from '../../../services/job-service';
import { addDBJob } from '../reducer/DBjobs-reducer';

function RecentJobList() {
  const { jobs } = useSelector((state) => state.DBjobs);
  //   const recruiterJobsArray = useSelector((state) => state.Recruiterjobs.data);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchAllJobsSearch() {
      const jobResponse = await getAllJobsSearch();

      const sortedJobs = jobResponse.sort(
        (a, b) => Date.parse(b.post_time) - Date.parse(a.post_time)
      );
      const sortedJobsSlice = sortedJobs.slice(0, 10);
      sortedJobsSlice.forEach((job) => {
        dispatch(addDBJob(job));
      });
    }

    // if (uid) {
    fetchAllJobsSearch();
    // }
  }, []);
  //   console.log(recruiterJobsArray);
  return (
    <div className="list-group">
      {Array.isArray(jobs) &&
        jobs.map((job) => {
          return <RecentJobItem key={job.id} {...job} />;
        })}

      {/* {recruiterJobsArray.RecruiterJobs.map((job) => {
        return <RecentJobItem job={job} />;
      })} */}
    </div>
  );
}
export default RecentJobList;
