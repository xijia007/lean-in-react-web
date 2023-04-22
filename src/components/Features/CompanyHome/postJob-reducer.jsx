import { createSlice } from '@reduxjs/toolkit';

import { convertDate } from '../../../utils/timeUtil';

// const initialState2 = { postJobs };
import PostJobs from './postJobs';

const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().substr(-2);

    return `${month}/${day}/${year}`;
  };

const postJobSlice = createSlice({
    name: 'postJobs',
    initialState :{
        postJobs: PostJobs,
        postJobScreen:true,
    },
    reducers: {

        addJob(state, action) {
           
            const newState = action.payload;
            newState.start = formatDate(newState.start);
            newState.end = formatDate(newState.end);

            const existingPostJob = state.postJobs.find(
                (postJob) => postJob._id === newState.id
            );

            if (!existingPostJob) {
                state.postJobs= [...state.postJobs, newState];
               
            }

          

        },
        deletePostJob(state, action) {
            state.postJobs = state.postJobs.filter(
                (e) => e.id !== action.payload
            );
        },
        changePostJobScreen(state,action){
            state.postJobScreen = !state.postJobScreen;
        },
    },
});

export default postJobSlice.reducer;

export const { addJob, deletePostJob,changePostJobScreen } =
    postJobSlice.actions;
