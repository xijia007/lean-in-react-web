import SearchBar from '../SearchScreen/search-bar.jsx';
import JobDetailsList from '../JobDetailsList/index.jsx';

function SearchDetails() {
  return (
    <div className="container">
      <h1>Search Details</h1>
      <SearchBar />

      <div className="row" id="wd-search-details">
        <JobDetailsList />
      </div>
    </div>
  );
}

export default SearchDetails;
