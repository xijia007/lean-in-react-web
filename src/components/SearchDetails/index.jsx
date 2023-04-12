function SearchDetails() {
  return (
    <div class="container">
      <h1>Search Details</h1>

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
                          <img src="https://via.placeholder.com/200" alt="Company Logo" class="img-fluid"/>
                      </div>
                      <div class="col-10">
                          <div class="row"> 
                              <b>Job Title: Software Engineer</b> 
                          </div>
                          <div class="row"> 
                              <b>Company Name: Google</b> 
                          </div>
                          <div class="row">
                              <div class="col-12"> 
                                  Job Location: San Francisco, CA </div>
                          </div>
                          <div class="row">
                              <div class="col-12"> Posted time: 2 days ago </div>
                          </div>

                          <div class="row">
                              <div class="col-12 mt-3"> 
                                  <b>Job Description: </b>
                                  <p class="m-3">
                                      If you’re looking to hit the ground running, the Enterprise Management Internship will help you build valuable business and leadership skills. For a university/college student, the real-world professional experience you’ll receive during the internship will help you stand apart from the crowd, and will be more than just a line on your resume. From day one as a paid intern with Enterprise, you'll learn what it takes to run a successful business and acquire highly marketable skills in management. Our university/college interns take on the same challenges as our first and second year full-time professionals. It's a team-based environment; and throughout your internship, your peers will be right by your side helping you learn, grow and have fun. This role is located in Fremont, CA. The hourly pay is $20 / hour.
                                  </p>
                              </div>
                          </div>
                          <div class="row">
                              <button type="button" class="btn btn-primary col m-3">Apply</button>
                              <button type="button" class="btn btn-outline-secondary col m-3">Save</button>
                          </div>
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

export default SearchDetails;
