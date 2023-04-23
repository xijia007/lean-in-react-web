import { useSelector } from 'react-redux';
import JobSummaryItem from '../../Search/JobSummaryList/job-summary-item';

function RecentJobList() {
  const { jobs } = useSelector((state) => state.DBjobs);
  return (
    <div className="list-group mb-4">
      <div className=" p-3">
        <h4 className="fw-bold mt-2 mb-1">See recent jobs posted on LeanIn:</h4>
      </div>
      {Array.isArray(jobs) &&
        jobs.map((job) => {
          return <JobSummaryItem key={job.job_id} job={job} />;
        })}
    </div>
  );
}
export default RecentJobList;
