// TODO: this reducer needs to be connected with job detail page!!

import {createSlice} from "@reduxjs/toolkit";
import jobs from "./jobs";

const initialState = {jobs};

const appliedJobsSlice = createSlice({
  name: "appliedJobs",
  initialState,
  reducers: {
    applyJob(state, action) {
      state.jobs.push({...action.payload, _id: (new Date()).getTime()});
    },
    // no need to un-apply a job
    // unapplyJob(state, action) {
    //   state.jobs = state.jobs.filter(e => e._id !== action.payload);
    // },
  },
});

export default appliedJobsSlice.reducer;

export const {applyJob} = appliedJobsSlice.actions;