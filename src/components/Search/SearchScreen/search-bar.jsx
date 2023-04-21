function SearchBar({ onSearch }) {
  return (
    <div className="row" id="wd-search-bar">
      <div className="input-group mb-3 ps-0">
        <input
          type="text"
          className="form-control"
          placeholder="Search for jobs"
        />
        <button className="btn btn-primary" type="button" id="search-button">
          Search
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
