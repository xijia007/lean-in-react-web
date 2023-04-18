// TODO: this reducer needs to be connected with job detail page!!

import {createSlice} from "@reduxjs/toolkit";
import appliedJobs from "./appliedJobs";

const initialState = {appliedJobs};
// const initialState = {appliedJobs: []};

const appliedJobsSlice = createSlice({
  name: "appliedJobs",
  initialState,
  reducers: {
    applyJob(state, action) {
      // state.appliedJobs.push({
      state.appliedJobs.unshift({
        ...action.payload, _id: (new Date()).getTime()
      });
      console.log("state.appliedJobs in appliedJobsSlice: ", state.appliedJobs)
    },
    // no need to un-apply a job
    // unapplyJob(state, action) {
    //   state.appliedJobs = state.appliedJobs.filter(e => e._id !== action.payload);
    // },
  },
});

export default appliedJobsSlice.reducer;

export const {applyJob} = appliedJobsSlice.actions;

