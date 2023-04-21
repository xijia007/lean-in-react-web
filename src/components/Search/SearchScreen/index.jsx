import React from 'react';
import SearchBar from './search-bar.jsx';
import JobSummaryList from '../JobSummaryList/index.jsx';
import axios from "axios";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  console.log("searching: ", search)
  const [results, setResults] = useState({});

  const searchJobsByKeyword = async () => {
      const options = {
          method: 'GET',
          url: 'https://jsearch.p.rapidapi.com/search',
          params: {query: search, page: '1', num_pages: '1'},
          headers: {
            'X-RapidAPI-Key': 'f2a0361d41msh2ff7d2d6a6963bdp16613ajsn2eeffd075db5',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          }
        };
      axios.request(options).then(function (response) {
          setResults(response.data.data);
          // return response.data.data
      }).catch(function (error) {
          console.error(error);
      });
  };
  console.log("results 2: ", results);

  return (
    <div className="container">
      <h1>Search</h1>
      {/* <SearchBar /> */}
      <div className="row" id="wd-search-bar">
            <div className="input-group mb-3 ps-0">
                <input type="text" className="form-control" 
                    placeholder="Search for jobs"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                <button className="btn btn-primary" type="button" id="search-button"
                    onClick={searchJobsByKeyword}>
                    Search
                </button>
                {/* <pre>{JSON.stringify(results, null, 2)}</pre> */}
            </div>
        </div>

      
      <div className="row" id="wd-search-results">
          {/* <JobSummaryList /> */}
          <JobSummaryList jobs={results} />
      </div>

      <div className="row">
          Recent Job Lists: To be updated with the same component from Home Screen, or a similar one as the search results?
      </div>
  </div>
  );
}

export default Search;
