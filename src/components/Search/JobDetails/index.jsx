import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useFetchJobs from 'customhooks/fetchJob';
import JobKeyFacts from '../JobSummaryList/job-key-facts';
import CompanyImage from '../JobSummaryList/company-image';
// import {saveJob} from '../../Features/AppliedSavedJobs/saved-jobs-reducer.jsx';
import {
  addSavedJob,
  removeSavedJob,
} from '../../Features/AppliedSavedJobs/saved-jobs-reducer';
import { addAppliedJob } from "../../Features/AppliedSavedJobs/applied-jobs-reducer";
import { addUserAppliedJobs, addUserSavedJobs, removeUserSavedJobs } from "services/user-service.js";


function JobDetails() {
  useFetchJobs();
  const { jobId } = useParams();
  const { uid, isLogined } = useSelector((state) => state.userInfo.user);
  const { jobs } = useSelector((state) => state.jobs);
  const { jobs: savedJobs } = useSelector((state) => state.savedJobs);
  const job = jobs.find((item) => item.job_id === jobId);

  const { jobs: appliedJobs } = useSelector((state) => state.appliedJobs);
  const saved = savedJobs.find((e) => e.job_id === job.job_id);
  const applied = appliedJobs.find((e) => e.job_id === job.job_id);
  const dispatch = useDispatch();
  const onJobSaveUnsave = async () => {
    // combine save/unsave button function
    if (saved) {
      try {
        const removeJob = {
          job_id: job.job_id,
        };
        await removeUserSavedJobs(uid, removeJob);
        dispatch(removeSavedJob(job));
      } catch (error) {
        console.err(error);
      }
    } else {
      try {
        await addUserSavedJobs(uid, job);
        dispatch(addSavedJob(job));
      } catch (error) {
        console.err(error);
      }
    }
  };

  const onJobApply = async () => {

    if (!applied) {
      try {
        await addUserAppliedJobs(uid, job);
        dispatch(addAppliedJob(job));
        console.log("applied job", job)
      } catch (error) {
        console.err(error);
      }}
    console.log("unapplied job", job)
    console.log("appolied job?", applied)

  };

  return (
    <div className="list-group">
      <div className="list-group-item">
        <div className="row">
          {/* <h4>Job Details for selected id: {jobId}</h4> */}
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
                <p className="m-3">{job.description}</p>
              </div>
            </div>
            {isLogined &&
              <div className="row">
                <button
                  type="button"
                  onClick={() => onJobApply()}
                  className={`btn btn-primary col m-3 ${applied ? "disabled" : ""}`}
                >
                  {applied ? "Already applied" : "Apply for this job"}
                </button>
                <button
                  type="button"
                  // onClick= {() => onJobSave(job)}
                  onClick={() => onJobSaveUnsave()}
                  className="btn btn-outline-secondary col m-3"
                >
                  {saved ? 'Unsave this job' : 'Save this job'}
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default JobDetails;
