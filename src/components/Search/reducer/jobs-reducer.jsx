import { createSlice } from '@reduxjs/toolkit';
// import jobs from './jobs';

const initialState = {
  jobs: [],
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJob: (state, action) => {
      const {
        job_id: id,
        title,
        description,
        // location,
        addCity,
        addState,
        apply,
        image,
        company_name: company,
        post_time: postedTime,
      } = action.payload;

      const newState = {
        id,
        title,
        description,
        location: `${addCity}, ${addState}`,
        image,
        // apply,
        postedTime,
        company,
      };

      // console.log('existingJob:', existingJob);

      const existingJob = state.jobs.find((job) => job.id === id);

      if (existingJob) {
        // If the education object already exists, replace it with the new data
        return {
          ...state,
          jobs: state.jobs.map((job) => {
            if (job.id === id) {
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

export default jobsSlice.reducer;
export const { addJob } = jobsSlice.actions;
