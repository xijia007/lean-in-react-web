import { createSlice } from '@reduxjs/toolkit';
// import DBjobs from "./DBjobs.jsx";

const initialState = {
  jobs: [],
};

const DBJobsSlice = createSlice({
  name: 'DBjobs',
  initialState,
  reducers: {
    addDBJob: (state, action) => {
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
  },
});

export default DBJobsSlice.reducer;

export const { addDBJob } = DBJobsSlice.actions;
