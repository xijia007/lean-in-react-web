import React from 'react';
import AppliedJobsComponent from "./AppliedJobs/index.jsx";
import SavedJobsComponent from "./SavedJobs/index.jsx";

const JobsSideBar = () => {
  return(
    <>
      <AppliedJobsComponent/>
      <br/>
      <SavedJobsComponent/>
    </>
  );
};

export default JobsSideBar;