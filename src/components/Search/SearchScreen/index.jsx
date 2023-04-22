import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './search-bar';
import JobSummaryList from '../JobSummaryList/index';
import { getAllJobs, getAllJobsSearch } from '../../../services/job-service';

import { addJob } from '../reducer/jobs-reducer';

function Search() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchAlljobs() {
      const jobResponse = await getAllJobs();

      // console.log(jobResponse);

      jobResponse.forEach((job) => {
        console.log(job);
        dispatch(addJob(job));
      });
    }

    // if (uid) {
    // fetchAlljobs();
    // }
  }, []);
  useEffect(() => {
    async function fetchAllJobsSearch() {
      const jobResponse = await getAllJobsSearch();

      const sortedJobs = jobResponse.sort(
        (a, b) => Date.parse(b.post_time) - Date.parse(a.post_time)
      );
      // console.log(sortedJobs);
      sortedJobs.forEach((job) => {
        // console.log(job);
        dispatch(addJob(job));
      });
    }

    // if (uid) {
    fetchAllJobsSearch();
    // }
  }, []);
  return (
    <div className="container">
      <h1>Search</h1>
      <SearchBar />

      <div className="row" id="wd-search-results">
        <JobSummaryList />
      </div>

      <div className="row">
        Recent Job Lists: To be updated with the same component from Home
        Screen, or a similar one as the search results?
      </div>
    </div>
  );
}

export default Search;
