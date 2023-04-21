import { convertDate } from '../../../utils/timeUtil';

function JobKeyFacts(job) {
  const { title, company, location, postedTime } = job;
  const time = postedTime ? convertDate(postedTime) : null;
  return (
    <div>
      <div className="row">
        <b>Job Title: {title}</b>
      </div>
      <div className="row">
        <b>Company: {company}</b>
      </div>
      <div className="row">
        <div className="col-12"> Job Location: {location} </div>
      </div>
      <div className="row">
        <div className="col-12"> Posted Time: {time} </div>
      </div>
    </div>
  );
}
export default JobKeyFacts;
