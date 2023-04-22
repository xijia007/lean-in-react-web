import {createSlice} from "@reduxjs/toolkit";
import postedJobs from "./postedJobs.jsx";



const postedJobsSlice = createSlice({
    name: "postedJobs",
    initialState:{
        data: {postedJobs}
    },
    reducers: {
        postedJob(state, action) {
            state.postedJobs.push({...action.payload, _id: (new Date()).getTime()});

        },
    },
});

export default postedJobsSlice.reducer;

export const {postedJob} = postedJobsSlice.actions;