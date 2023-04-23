import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAppliedJobs, getUserAppliedJobs, getUserSavedJobs } from "../services/user-service"; // import your API functions here
import { getAllJobsSearch } from '../services/job-service';

import { addJob } from '../reducers/jobs-reducer';
import { addDBJob } from '../reducers/DBjobs-reducer';
import { addSavedJob } from '../components/Features/AppliedSavedJobs/saved-jobs-reducer';
import { addAppliedJob } from "components/Features/AppliedSavedJobs/applied-jobs-reducer.jsx";

function useFetchJobs() {
  console.log('fetching jobs');
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.userInfo.user);
  const { jobs: savedJobs } = useSelector((state) => state.savedJobs);
  const { jobs: appliedJobs } = useSelector((state) => state.appliedJobs);
  const { jobs: allJobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    async function fetchAllJobsSearch() {
      const jobResponse = await getAllJobsSearch();
      const sortedJobs = jobResponse.slice().sort((a, b) =>
        a.title.localeCompare(b.title, undefined, {
          sensitivity: 'base',
        })
      );
      sortedJobs.forEach((job) => {
        dispatch(addJob(job));
      });
      const sortedJobsSlice = sortedJobs.slice(0, 10);
      sortedJobsSlice.forEach((job) => {
        dispatch(addDBJob(job));
      });
    }

    async function fetchSavedJobs() {
      const jobResponse = await getUserSavedJobs(uid);

      jobResponse.forEach((job) => {
        dispatch(addSavedJob(job));
      });
    }

    async function fetchAppliedJobs() {
      const jobResponse = await getUserAppliedJobs(uid);

      jobResponse.forEach((job) => {
        dispatch(addAppliedJob(job));
      });
    }

    if (allJobs.length === 0) {
      fetchAllJobsSearch();
    } else if (savedJobs.length === 0) {
      fetchSavedJobs();
    } else if (appliedJobs.length === 0) {
      fetchAppliedJobs();
    }
  }, [allJobs.length, dispatch, savedJobs.length, uid, appliedJobs.length, uid]);
  console.log("fetched applied job", appliedJobs)

}

export default useFetchJobs;
