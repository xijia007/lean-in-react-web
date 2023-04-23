import { useSelector } from 'react-redux';
import RecentJobItem from './recentJobItem';

function RecentJobList() {
  const { jobs } = useSelector((state) => state.DBjobs);
  return (
    <div className="list-group mb-4">
      <div className="list-group-item p-3">
        <h4 className="fw-bold mt-2 mb-1">See recent jobs posted on LeanIn ...</h4>
      </div>
      {Array.isArray(jobs) &&
        jobs.map((job) => {
          return <RecentJobItem key={job.job_id} {...job} />;
        })}
    </div>
  );
}
export default RecentJobList;
