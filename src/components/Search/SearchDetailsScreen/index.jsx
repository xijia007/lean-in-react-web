import { useParams } from 'react-router-dom';
import SearchBar from '../SearchScreen/search-bar';
import JobDetailsList from '../JobDetailsList/index';
import JobDetail from '../JobDetails/index';

function SearchDetails() {
  // const { id } = useParams();
  return (
    <div className="container">
      <h1>Search Details</h1>
      {/* <SearchBar /> */}

      <div className="row" id="wd-search-details">
        <JobDetail />
        {/* <JobDetailsList /> */}
      </div>
    </div>
  );
}

export default SearchDetails;
