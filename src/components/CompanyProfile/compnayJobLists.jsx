import { useSelector } from 'react-redux';
import RecentJobItem from '../Home/recentJobLists/recentJobItem';
import JobSummaryItem from '../Search/JobSummaryList/job-summary-item';

function CompanyJobLists({ companyName }) {
  const { role } = useSelector((state) => state.userInfo.user);
  const isUser = role === 'user';
  const { jobs } = useSelector((state) => state.jobs);
  const filteredJobs = jobs.filter((job) => job.company_name === companyName);
  return (
    <div className="list-group">
      {Array.isArray(filteredJobs) &&
        filteredJobs.map((job) => {
          return isUser ? (
            <JobSummaryItem key={job.job_id} job={job} />
          ) : (
            <RecentJobItem key={job.job_id} job={job} />
          );
        })}
    </div>
  );
}
export default CompanyJobLists;
