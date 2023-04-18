import {createSlice} from "@reduxjs/toolkit";
import appliedJobs from "./appliedJobs.jsx";

const initialState = {appliedJobs};

const appliedJobsSlice = createSlice({
  name: "appliedJobs",
  initialState,
  reducers: {
    applyJob(state, action) {
      // state.appliedJobs.push(action.payload);
      state.appliedJobs.unshift(action.payload); // show the latest applied job at the top
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

