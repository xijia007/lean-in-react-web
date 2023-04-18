import React from 'react';
import recentJobItem from "./recentJobItem.jsx";

import { useSelector } from 'react-redux';


const recentJobList = () => {
    const dbjobsArray = useSelector(state => state.DBjobs);
    const recruiterJobsArray = useSelector(state => state.RecruiterJobs);

    return (
        <div className="list-group">
            {dbjobsArray.map(job =>
                    <recentJobItem key={job._id} {...job} />
            )}
            {recruiterJobsArray.map(job =>
                <RecruiterJobs key={job._id} {...job} />
            )}
        </div>
    );
}
export default recentJobList();