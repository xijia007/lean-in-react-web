// TODO: this reducer needs to be connected with job detail page!!

import {createSlice} from "@reduxjs/toolkit";
import savedJobs from "./savedJobs";

const initialState = {savedJobs};

const savedJobsSlice = createSlice({
  name: "savedJobs",
  initialState,
  reducers: {
    saveJob(state, action) {
      state.savedJobs.push({...action.payload, _id: (new Date()).getTime()});
    },
    unSaveJob(state, action) {
      state.savedJobs = state.savedJobs.filter(e => e._id !== action.payload);
    },
  },
});

export default savedJobsSlice.reducer;

export const {saveJob, unSaveJob} = savedJobsSlice.actions;