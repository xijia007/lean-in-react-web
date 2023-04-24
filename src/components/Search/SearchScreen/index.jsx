import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { useSelector, useDispatch } from 'react-redux';
import useFetchJobs from 'customhooks/fetchJob';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import SearchBar from './search-bar';
import JobSummaryList from '../JobSummaryList/index';
import { updateSearchTerm } from '../../../reducers/search-reducer';

function Search() {
  useFetchJobs();
  const { jobs } = useSelector((state) => state.jobs);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const criteria = searchParams.get('criteria');

  const initialSearchTerm = useSelector((state) => state.searchTerm.searchTerm);

  const [searchTerm, setSearchTerm] = useState(criteria ?? initialSearchTerm);

  const handleSearch = (keyword) => {
    setSearchTerm(keyword);
    dispatch(updateSearchTerm(keyword));
    if (keyword) {
      navigate(`/search?criteria=${keyword}`);
    } else {
      navigate(`/search`);
    }
  };

  const options = {
    keys: ['title', 'company_name', 'add_state'],
    includeScore: true,
    threshold: 0.1,
  };

  const fuse = new Fuse(jobs, options);

  const searchedList = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : jobs;

  const searchResultsCount = searchedList.length;

  return (
    <div className="container">
      <h1>Search</h1>
      <SearchBar setKeyword={handleSearch} currentKeyword={criteria} />

      <h4>Results: {searchResultsCount}</h4>

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
