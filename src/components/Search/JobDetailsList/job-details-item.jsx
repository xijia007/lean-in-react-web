import React from 'react';
import JobKeyFacts from '../JobSummaryList/job-key-facts';
import CompanyImage from '../JobSummaryList/company-image';
import {useSelector, useDispatch} from 'react-redux';
import {saveJob} from '../../Features/AppliedSavedJobs/saved-jobs-reducer.jsx';
import {applyJob} from '../../Features/AppliedSavedJobs/applied-jobs-reducer.jsx';

function JobDetailItem (job) {
    const {savedJobs} = useSelector((state) => state.savedJobs)
    const {appliedjobs} = useSelector((state) => state.appliedJobs)
    const dispatch = useDispatch();
    const onJobSave = (job) => {
        dispatch(saveJob(job));
        console.log("savedJob: ", job);
    }
    const onJobApply = (job) => {
        dispatch(applyJob(job));
        console.log("appliedJob: ", job);
    }
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
                        <button type="button" 
                            onClick= {() => onJobApply(job)}
                            className="btn btn-primary col m-3">Apply</button>
                        <button type="button" 
                            onClick= {() => onJobSave(job)}
                            className="btn btn-outline-secondary col m-3">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JobDetailItem;