import {createSlice} from "@reduxjs/toolkit";
import RecruiterJobs from "./RecruiterJobs.jsx";



const RecruiterJobsSlice = createSlice({
    name: "Recruiterjobs",
    initialState:{
        data:{RecruiterJobs},
    },
    reducers: {
        RecruiterPostJob(state, action) {
            state.RecruiterJobs.push({...action.payload, _id: (new Date()).getTime()});

        },
    },
});

export default RecruiterJobsSlice.reducer;

export const {RecruiterPostJob} = RecruiterJobsSlice.actions;