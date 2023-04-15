// TODO: this reducer needs to be connected with job detail page!!

import {createSlice} from "@reduxjs/toolkit";
import jobs from "./jobs";

const initialState = {jobs};

const savedJobsSlice = createSlice({
  name: "savedJobs",
  initialState,
  reducers: {
    saveJob(state, action) {
      state.jobs.push({...action.payload, _id: (new Date()).getTime()});
    },
    unSaveJob(state, action) {
      state.jobs = state.jobs.filter(e => e._id !== action.payload);
    },
  },
});

export default savedJobsSlice.reducer;

export const {saveJob, unSaveJob} = savedJobsSlice.actions;