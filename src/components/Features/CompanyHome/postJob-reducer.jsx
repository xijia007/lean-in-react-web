import { createSlice } from '@reduxjs/toolkit';

import { convertDate } from '../../../utils/timeUtil';

// const initialState2 = { postJobs };
import postJobs from "./postJobs.jsx";

const initialState = {
    postJobs: [],
};

const postJobSlice = createSlice({
    name: 'postJobs',
    initialState,
    reducers: {

        addJob(state, action) {
            const {
                postJob_id: id,
                jobCompany: company,
                description,
                jobTitle: title,
                start_time: start,
                end_time: end,
            } = action.payload;
            const newState = {
                id,
                company,
                description,
                title,
                start: convertDate(start),
                end: convertDate(end),
            };

            const existingPostJob = state.postJobs.find(
                (postJob) => postJob.id === id
            );

            if (existingPostJob) {

                return {
                    ...state,
                    postJobs: state.postJobs.map((postJob) => {
                        if (postJob.id === id) {
                            return newState;
                        }
                        return postJob;
                    }),
                };
            }

            return {
                ...state,
                postJobs: [...state.postJobs, newState],
            };

        },
        deletePostJob(state, action) {
            state.postJobs = state.postJobs.filter(
                (e) => e.id !== action.payload
            );
        },
    },
});

export default postJobSlice.reducer;

export const { addJob, deletePostJob } =
    postJobSlice.actions;
