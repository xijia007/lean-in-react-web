import JobDetail from '../JobDetails/index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SearchDetails() {
  const previousKeyword = useSelector((state) => state.searchTerm.searchTerm);
  const previousPage = previousKeyword? (`/search?criteria=${previousKeyword}`) : '/search';
  return (
    <div className="container">
      <h1>Job Details</h1>
      <Link to={previousPage}>
      {/* <Link to='/search'> */}
        <div className='mb-2 fs-5'>Go to search page</div>
      </Link>
      <div className="row" id="wd-search-details">
        <JobDetail />
      </div>
    </div>
  );
}

export default SearchDetails;
