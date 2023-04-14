import React from 'react';
import JobKeyFacts from './job-key-facts';

function JobSummaryItem (job) {
    return ( 
        <div className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`/images/${job.image}`} alt="Company Logo" className="img-fluid w-100 h-100"/>
                    {/* <img src="https://via.placeholder.com/100" alt="Company Logo" className="img-fluid"/> */}
                </div>
                <div className="col-8">
                    <JobKeyFacts {...job} />
                    {/* <div className="row"> 
                        <b>Job Title: {job.title}</b> 
                    </div>
                    <div className="row"> 
                        <b>Company Name: {job.company}</b> 
                    </div>
                    <div className="row">
                        <div className="col-12"> Job Location: {job.location} </div>
                    </div>
                    <div className="row">
                        <div className="col-12"> Posted Time: {job.postedTime} </div>
                    </div> */}
                </div>
                <div className="col-2 d-flex align-items-center">
                    <button type="button" className="btn btn-outline-secondary">View details</button>
                </div>
            </div>
        </div>
    )
}
export default JobSummaryItem;