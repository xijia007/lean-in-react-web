import React from 'react';
import AppliedJobsComponent from './AppliedJobs/index';
import SavedJobsComponent from './SavedJobs/index';

function JobsSideBar() {
  return (
    <>
      <AppliedJobsComponent />
      <br />
      <SavedJobsComponent />
    </>
  );
}

export default JobsSideBar;
