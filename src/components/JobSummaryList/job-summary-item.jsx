import React from 'react';
import JobKeyFacts from './job-key-facts';
import { useNavigate } from 'react-router-dom';

function JobSummaryItem (job) {
    const navigate = useNavigate();
    return ( 
        <div className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`/images/${job.image}`} alt="Company Logo" className="img-fluid w-100 h-100"/>
                    {/* <img src="https://via.placeholder.com/100" alt="Company Logo" className="img-fluid"/> */}
                </div>
                <div className="col-8">
                    <JobKeyFacts {...job} />
                </div>
                <div className="col-2 d-flex align-items-center">
                    <button type="button" className="btn btn-outline-secondary"
                            onClick={() => {navigate('/search-details');}}>
                        View details
                    </button>

                </div>
            </div>
        </div>
    )
}
export default JobSummaryItem;