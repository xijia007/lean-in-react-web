import {createSlice} from "@reduxjs/toolkit";
import savedJobs from "./savedJobs.jsx";

const initialState = {savedJobs};

const savedJobsSlice = createSlice({
  name: "savedJobs",
  initialState,
  reducers: {
    saveUnsaveJob(state, action) { // combine save or unsave a job
      const saved = state.savedJobs.find(e => e._id === action.payload._id);
      if (saved) {
        state.savedJobs = state.savedJobs.filter(e => e._id !== action.payload._id);
      } else {
          state.savedJobs.unshift(action.payload); // show the latest saved job at the top
      }
    },
    // saveJob(state, action) {
    //   state.savedJobs.push(action.payload);
    // },
    // unSaveJob(state, action) {
    //   state.savedJobs = state.savedJobs.filter(e => e._id !== action.payload);
    // },
  },
});

export default savedJobsSlice.reducer;

export const {saveJob, unSaveJob, saveUnsaveJob} = savedJobsSlice.actions;