import { createSlice } from '@reduxjs/toolkit';

const initialState = { jobs: [] };

const appliedJobsSlice = createSlice({
  name: 'appliedJobs',
  initialState,
  reducers: {
    addAppliedJob: (state, action) => {
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
      return {
        ...state,
        jobs: [...state.jobs, newState],
      };
    },
    clearAppliedJobs: (state, action) => {
      state.jobs = [];
    },
  },
});

export default appliedJobsSlice.reducer;

export const { addAppliedJob, clearAppliedJobs } = appliedJobsSlice.actions;
