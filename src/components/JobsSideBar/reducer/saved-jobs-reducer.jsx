// TODO: this reducer needs to be connected with job detail page!!

import {createSlice} from "@reduxjs/toolkit";
import savedJobs from "./savedJobs";

const initialState = {savedJobs};

const savedJobsSlice = createSlice({
  name: "savedJobs",
  initialState,
  reducers: {
    saveUnsaveJob(state, action) {
      const saved = state.savedJobs.find(e => e._id === action.payload._id)
      if (saved) {
        state.savedJobs = state.savedJobs.filter(e => e._id !== action.payload._id);
      } else {
        state.savedJobs.unshift({
          ...action.payload, _id: (new Date()).getTime()
        });
      }
    },
    // saveJob(state, action) {
    //   state.savedJobs.push({...action.payload, _id: (new Date()).getTime()});
    // },
    // unSaveJob(state, action) {
    //   state.savedJobs = state.savedJobs.filter(e => e._id !== action.payload);
    // },
  },
});

export default savedJobsSlice.reducer;

export const {saveJob, unSaveJob, saveUnsaveJob} = savedJobsSlice.actions;