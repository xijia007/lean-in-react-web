import React from 'react';
import SearchBar from './search-bar.jsx';
import JobSummaryList from '../JobSummaryList/index.jsx';


function Search() {
  return (
    <div className="container">
      <h1>Search</h1>
      <SearchBar />
      
      <div className="row" id="wd-search-results">
          <JobSummaryList />
      </div>

      <div className="row">
          Recent Job Lists: To be updated with the same component from Home Screen, or a similar one as the search results?
      </div>
  </div>
  );
}

export default Search;
