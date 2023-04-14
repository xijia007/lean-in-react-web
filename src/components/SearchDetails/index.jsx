import JobDetailsList from '../JobDetailsList/index.jsx';

function SearchDetails() {
  return (
    <div className="container">
      <h1>Search Details</h1>

      <div className="row" id="wd-search-bar">
            <div className="input-group mb-3 ps-0">
                <input type="text" className="form-control" placeholder="Search for jobs"/>
                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
            </div>
      </div>
      <div className="row" id="wd-search-results">
        <JobDetailsList />
          {/* <div className="list-group">
              <div className="list-group-item">
                  <div className="row">
                      <div className="col-2">
                          <img src="https://via.placeholder.com/200" alt="Company Logo" className="img-fluid"/>
                      </div>
                      <div className="col-10">
                          <div className="row"> 
                              <b>Job Title: Software Engineer</b> 
                          </div>
                          <div className="row"> 
                              <b>Company Name: Google</b> 
                          </div>
                          <div className="row">
                              <div className="col-12"> 
                                  Job Location: San Francisco, CA </div>
                          </div>
                          <div className="row">
                              <div className="col-12"> Posted time: 2 days ago </div>
                          </div>

                          <div className="row">
                              <div className="col-12 mt-3"> 
                                  <b>Job Description: </b>
                                  <p className="m-3">
                                      If you’re looking to hit the ground running, the Enterprise Management Internship will help you build valuable business and leadership skills. For a university/college student, the real-world professional experience you’ll receive during the internship will help you stand apart from the crowd, and will be more than just a line on your resume. From day one as a paid intern with Enterprise, you'll learn what it takes to run a successful business and acquire highly marketable skills in management. Our university/college interns take on the same challenges as our first and second year full-time professionals. It's a team-based environment; and throughout your internship, your peers will be right by your side helping you learn, grow and have fun. This role is located in Fremont, CA. The hourly pay is $20 / hour.
                                  </p>
                              </div>
                          </div>
                          <div className="row">
                              <button type="button" className="btn btn-primary col m-3">Apply</button>
                              <button type="button" className="btn btn-outline-secondary col m-3">Save</button>
                          </div>
                      </div>  
                  </div>
              </div>
          </div> */}
      </div>
    </div>
  );
}

export default SearchDetails;
