import { useSelector } from 'react-redux';
import RecentJobItem from './recentJobItem';

function RecentJobList() {
  const { jobs } = useSelector((state) => state.DBjobs);
  return (
    <div className="list-group">
      {Array.isArray(jobs) &&
        jobs.map((job) => {
          return <RecentJobItem key={job.job_id} {...job} />;
        })}
    </div>
  );
}
export default RecentJobList;
