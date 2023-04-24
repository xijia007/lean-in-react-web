import React from 'react';
import { convertISODate } from '../../../utils/timeUtil';

function RecentJobItem({ job }) {
  const {
    job_id,
    title,
    image,
    company_name,
    post_time,
    add_city,
    add_state,
    save_uid,
    apply_uid,
  } = job;
  console.log(job_id, save_uid, apply_uid);
  const location = `${add_city}, ${add_state}`;
  const imageSrc = image || `https://logo.clearbit.com/${company_name}.com`;
  const time = post_time ? convertISODate(post_time) : null;
  const savedCount = save_uid ? save_uid.length : 0;
  const appliedCount = apply_uid ? apply_uid.length : 0;
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-2 text-center">
          <img
            src={imageSrc}
            onError={(e) => {
              e.target.src = '/images/default_logo.jpg';
            }} // set default image URL
            alt="Company Logo"
            className="img-fluid"
          />
        </div>
        <div className="col-8">
          <div>
            <div className="row">
              <div>Job Title: {title}</div>
            </div>
            <div className="row">
              <b>Company: {company_name}</b>
            </div>
            <div className="row">
              <div className="col-12"> Job Location: {location} </div>
            </div>
            <div className="row">
              <div className="col-12"> Posted Time: {time} </div>
            </div>
            <div className="row">
              <b>Job ID: {job_id}</b>
            </div>
            <div className="row">
              <div className="col-12"> Applied User(s): {appliedCount} </div>
            </div>
            <div className="row">
              <div className="col-12"> Saved User(s): {savedCount} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RecentJobItem;
