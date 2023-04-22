import React from 'react';
import { convertISODate } from '../../../utils/timeUtil';

function RecentJobItem(job) {
  const { title, image, company, postedTime, location } = job;
  console.log(title, image, company, postedTime, location);
  const imageSrc = image || `https://logo.clearbit.com/${company}.com`;
  const time = postedTime ? convertISODate(postedTime) : null;
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
        </div>
      </div>
    </div>
  );
}
export default RecentJobItem;
