function Search() {
  return (
    <div class="container">
      <h1>Search</h1>

        <div class="row" id="wd-search-bar">
            <div class="input-group mb-3 ps-0">
                <input type="text" class="form-control" placeholder="Search for jobs"/>
                <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
            </div>
        </div>
        <div class="row" id="wd-search-results">
            <div class="list-group">
                <div class="list-group-item">
                    <div class="row">
                        <div class="col-2">
                            <img src="https://via.placeholder.com/100" alt="Company Logo" class="img-fluid"/>
                        </div>
                        <div class="col-8">
                            <div class="row"> 
                                <b>Job Title: Software Engineer</b> 
                            </div>
                            <div class="row"> 
                                <b>Company Name: Google</b> 
                            </div>
                            <div class="row">
                                <div class="col-12"> Job Location: San Francisco, CA </div>
                            </div>
                            <div class="row">
                                <div class="col-12"> Posted Time: 2 days ago </div>
                            </div>
                        </div>
                        <div class="col-2 d-flex align-items-center">
                            <button type="button" class="btn btn-outline-secondary">View details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            Recent Job Lists: To be updated with the same component from Home Screen, or a similar one as the search results?
        </div>
    </div>
  );
}

export default Search;
