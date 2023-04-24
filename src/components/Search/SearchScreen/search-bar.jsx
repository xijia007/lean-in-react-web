import { useState } from 'react';
import { useSelector } from 'react-redux';

function SearchBar({ setKeyword, currentKeyword }) {
  const initialSearchTerm = useSelector((state) => state.searchTerm.searchTerm);
  const [searchTerm, setSearchTerm] = useState(
    currentKeyword ?? initialSearchTerm
  );

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setKeyword(searchTerm);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setKeyword(searchTerm);
    }
  };

  return (
    <div className="row" id="wd-search-bar">
      <div className="input-group mb-3 ps-0">
        <input
          type="text"
          className="form-control"
          placeholder="Search for jobs"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn btn-primary"
          type="button"
          id="search-button"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
