import JobSummaryList from '../JobSummaryList/index.jsx';

function Search() {
  return (
    <div className="container">
      <h1>Search</h1>

        <div className="row" id="wd-search-bar">
            <div className="input-group mb-3 ps-0">
                <input type="text" className="form-control" placeholder="Search for jobs"/>
                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
            </div>
        </div>
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
