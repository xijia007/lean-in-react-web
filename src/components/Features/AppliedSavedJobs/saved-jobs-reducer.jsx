import {createSlice} from "@reduxjs/toolkit";
import savedJobs from "./savedJobs.jsx";

const initialState = {savedJobs};

const savedJobsSlice = createSlice({
  name: "savedJobs",
  initialState,
  reducers: {
    saveJob(state, action) {
      state.savedJobs.push(action.payload);
    },
    unSaveJob(state, action) {
      state.savedJobs = state.savedJobs.filter(e => e._id !== action.payload);
    },
  },
});

export default savedJobsSlice.reducer;

export const {saveJob, unSaveJob} = savedJobsSlice.actions;