import { useParams } from 'react-router-dom';
import SearchBar from '../SearchScreen/search-bar';
import JobDetailsList from '../JobDetailsList/index';
import JobDetail from '../JobDetails/index';
import { Link } from 'react-router-dom';

function SearchDetails() {
  // const { id } = useParams();
  return (
    <div className="container">
      <h1>Search Details</h1>
      {/* <SearchBar /> */}
      <Link to="/search">
        <div className='mb-2 fs-5'>Go back to search results</div>
      </Link>
      <div className="row" id="wd-search-details">
        <JobDetail />
        {/* <JobDetailsList /> */}
      </div>
    </div>
  );
}

export default SearchDetails;
