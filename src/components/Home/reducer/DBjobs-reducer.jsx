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
        job_id: id,
        title,
        description,
        add_city: addCity,
        add_state: addState,
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
        apply,
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

export default DBJobsSlice.reducer;

export const { addDBJob } = DBJobsSlice.actions;
