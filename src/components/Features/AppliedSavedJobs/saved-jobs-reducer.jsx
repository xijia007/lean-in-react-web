import { createSlice } from '@reduxjs/toolkit';
// import savedJobs from "./savedJobs.jsx";

// const initialState = {savedJobs};

const initialState = {
  jobs: [],
};

const savedJobsSlice = createSlice({
  name: 'savedJobs',
  initialState,
  reducers: {
    addSavedJob: (state, action) => {
      const {
        job_id,
        title,
        description,
        add_city,
        add_state,
        apply,
        image,
        company_name,
        post_time,
      } = action.payload;

      const newState = {
        job_id,
        title,
        description,
        add_city,
        add_state,
        image,
        apply,
        company_name,
        post_time,
      };

      // console.log('existingJob:', existingJob);

      const existingJob = state.jobs.find((job) => job.job_id === job_id);

      if (existingJob) {
        // If the education object already exists, replace it with the new data
        return {
          ...state,
          jobs: state.jobs.map((job) => {
            if (job.job_id === job_id) {
              return newState;
            }
            return job;
          }),
        };
      }
      // If the education object does not exist, add it to the array
      return {
        ...state,
        jobs: [...state.jobs, newState],
      };
    },
    removeSavedJob: (state, action) => {
      const { job_id } = action.payload;
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.job_id !== job_id),
      };
    },
    clearSavedJobs: (state, action) => {
      state.jobs = [];
    },
  },
});

export default savedJobsSlice.reducer;

export const { addSavedJob, removeSavedJob, clearSavedJobs } = savedJobsSlice.actions;
