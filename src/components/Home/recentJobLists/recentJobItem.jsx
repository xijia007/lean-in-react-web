import React from 'react';

function recentJobItem(job) {

    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-2 text-center">
                    <img  src={`https://logo.clearbit.com/${job.company}.com`}
                          onError={(e) => { e.target.src = '/images/default_logo.jpg'; }}// set default image URL
                          alt="Company Logo" className="img-fluid"/>

                </div>
                <div className="col-8">
                    <div>
                        <div className="row">
                            <b>Job Title: {job.title}</b>
                        </div>
                        <div className="row">
                            <b>Company: {job.company}</b>
                        </div>
                        <div className="row">
                            <div className="col-12"> Job Location: {job.location} </div>
                        </div>
                        <div className="row">
                            <div className="col-12"> Posted Time: {job.postedTime} </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default recentJobItem();