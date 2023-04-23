import { useSelector } from 'react-redux';
import RecentJobItem from '../Home/recentJobLists/recentJobItem';

function CompanyJobLists({ companyName }) {
  const { jobs } = useSelector((state) => state.jobs);
  const filteredJobs = jobs.filter((job) => job.company_name === companyName);
  return (
    <div className="list-group">
      {Array.isArray(filteredJobs) &&
        filteredJobs.map((job) => {
          return <RecentJobItem key={job.job_id} {...job} />;
        })}
    </div>
  );
}
export default CompanyJobLists;
