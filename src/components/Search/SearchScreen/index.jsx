import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { useSelector } from 'react-redux';
import useFetchJobs from 'customhooks/fetchJob';
import SearchBar from './search-bar';
import JobSummaryList from '../JobSummaryList/index';

function Search() {
  useFetchJobs();
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
