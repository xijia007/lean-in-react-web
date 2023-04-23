import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { useSelector, useDispatch } from 'react-redux';
import useFetchJobs from 'customhooks/fetchJob';
import SearchBar from './search-bar';
import JobSummaryList from '../JobSummaryList/index';
import { updateSearchTerm } from '../../../reducers/search-reducer';

function Search() {
  useFetchJobs();
  const { jobs } = useSelector((state) => state.jobs);
  console.log('jobs:', jobs);
  const initialSearchTerm = useSelector((state) => state.searchTerm.searchTerm);
  console.log('initialSearchTerm:', initialSearchTerm);
  // if (typeof initialSearchTerm === 'string' || initialSearchTerm instanceof String) {
  //   console.log('initialSearchTerm is a string');
  // }
  // else {
  //     console.log('initialSearchTerm is not a string');
  // }

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  const dispatch = useDispatch();

  const handleSearch = (keyword) => {
    setSearchTerm(keyword);
    dispatch(updateSearchTerm(keyword));
  };

  console.log('searchTerm:', searchTerm);

  const options = {
    keys: ['title', 'company_name'],
    includeScore: true,
    threshold: 0.3,
  };

  const fuse = new Fuse(jobs, options);

  const searchedList = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : jobs;

  console.log('searchResults:', searchedList);
  const searchResultsCount = searchedList.length;

  return (
    <div className="container">
      <h1>Search</h1>
      <SearchBar setKeyword={handleSearch} />

      {/* <h4>Results: {searchResultsCount}</h4> */}

      {searchResultsCount === 0 && (
        <h2>Sorry, There is no results matching your search keyword.</h2>
      )}

      <div className="row" id="wd-search-results">
        <JobSummaryList jobs={searchedList} />
      </div>

      {/* <div className="row" id="wd-default-jobs-list">
        Default jobs list for testing: searchTerm is {searchTerm}
        {!searchTerm && <JobSummaryList jobs={jobs} />}
      </div> */}
    </div>
  );
}

export default Search;
