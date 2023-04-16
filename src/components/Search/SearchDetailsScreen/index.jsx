import SearchBar from '../SearchScreen/search-bar.jsx';
import JobDetailsList from '../JobDetailsList/index.jsx';
import { useParams } from 'react-router-dom';
import JobDetail from '../JobDetails/index.jsx';

function SearchDetails() {
  
  // const { id } = useParams();
  // console.log("id for SearchDetails: ", id)
  return (
    <div className="container">
      <h1>Search Details</h1>
      <SearchBar />

      <div className="row" id="wd-search-details">
        <JobDetail/>
        {/* <JobDetailsList /> */}
      </div>
    </div>
  );
}

export default SearchDetails;
