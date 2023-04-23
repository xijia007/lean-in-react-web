import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobsSearch } from 'services/job-service';
import { addJob } from 'reducers/jobs-reducer';
import SearchBar from './search-bar';
import JobSummaryList from '../JobSummaryList/index';

function Search() {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (keyword) => {
    setSearchTerm(keyword);
  };

  const options = {
    keys: ['title', 'company_name'],
    includeScore: true,
    threshold: 0.3,
  };

  const fuse = new Fuse(jobs, options);

  const filteredList = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : jobs;

  const searchResultsCount = filteredList.length;

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

    if (jobs.length === 0) {
      fetchAllJobsSearch();
    }
  }, [dispatch, jobs.length]);
  return (
    <div className="container">
      <h1>Search</h1>
      <SearchBar setKeyword={handleSearch} />

      <h4>Results: {searchResultsCount}</h4>

      {searchResultsCount === 0 && (
        <h2>Sorry, There is no results matching your search keyword.</h2>
      )}

      <div className="row" id="wd-search-results">
        <JobSummaryList jobs={filteredList} />
      </div>
    </div>
  );
}

export default Search;
