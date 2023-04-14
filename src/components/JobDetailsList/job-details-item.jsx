import React from 'react';
import JobKeyFacts from '../JobSummaryList/job-key-facts';
import CompanyImage from '../JobSummaryList/company-image';

function JobDetailItem (job) {
    return ( 
        <div className="list-group-item">
            <div className="row">
                <div className="col-2 text-center">
                    <CompanyImage {...job} />
                    {/* <img  src={`https://logo.clearbit.com/${job.company}.com`}
                          onError={(e) => { e.target.src = '/images/default_logo.jpg'; }}// set default image URL
                          alt="Company Logo" className="img-fluid"/> */}
                    {/* <img  src={`https://logo.clearbit.com/${job.company}.com`}
                          onError={(e) => { e.target.src = '/images/default_logo.jpg'; }}// set default image URL
                          alt="Company Logo" className="img-fluid"/> */}
                    {/* <img src={"https://via.placeholder.com/200"} alt="Company Logo" className="img-fluid w-200 h-200"/> */}
                    {/* <img src={`/images/${job.image}`} alt="Company Logo" className="img-fluid w-200 h-200"/> */}
                </div>
                <div className="col-10">
                    <JobKeyFacts {...job} />
                    <div className="row">
                        <div className="col-12 mt-3"> 
                            <b>Job Description: </b> 
                            <p className="m-3">
                                {job.description}
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
    )
}
export default JobDetailItem;