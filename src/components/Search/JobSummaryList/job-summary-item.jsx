import React from 'react';
import JobKeyFacts from './job-key-facts';
import { useNavigate } from 'react-router-dom';

function JobSummaryItem (job) {
    console.log("job in JobSummaryItem: ", job.job_id)
    const navigate = useNavigate();
    const NavigateJobDetails = (job_id) => navigate(`/search-details/${job_id}`)
    return ( 
        <div className="list-group-item">
            <div className="row">
                <div className="col-2 text-center">
                    <img 
                        // src={job.employer_logo ? job.employer_logo : '/images/default_logo.jpg'}
                        src={`https://logo.clearbit.com/${job.employer_name}.com`}
                          onError={(e) => { e.target.src = '/images/default_logo.jpg'; }}// set default image URL
                          alt="Company Logo" className="img-fluid" width={100}/>
                    {/* <img src={`/images/${job.image}`} alt="Company Logo" className="img-fluid w-100 h-100"/> */}
                    {/* <img src="https://via.placeholder.com/100" alt="Company Logo" className="img-fluid"/> */}
                </div>
                <div className="col-8">
                    <JobKeyFacts job={job} />
                </div>
                <div className="col-2 d-flex align-items-center">
                    <button type="button" className="btn btn-outline-secondary"
                            onClick={() => {NavigateJobDetails(job.job_id);}}>
                        View details
                    </button>
                    {/* <button type="button" className="btn btn-outline-secondary"
                            onClick={() => {navigate('/search-details');}}>
                        View details
                    </button> */}

                </div>
            </div>
        </div>
    )
}
export default JobSummaryItem;