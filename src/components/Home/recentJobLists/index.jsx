import React from 'react';
import RecentJobItem from "./RecentJobItem.jsx";


import { useSelector } from 'react-redux';


const RecentJobList = () => {
    const dbjobsArray = useSelector((state) => state.DBjobs.data);
    const recruiterJobsArray = useSelector((state) => state.RecruiterJobs.data);

    console.log(recruiterJobsArray);
    return (
        <div className="list-group">
            {dbjobsArray.DBjobs.map( (job) =>{
                
                 return( <RecentJobItem job={job}/>)
                }
            )}

        </div>
    );
}
export default RecentJobList;