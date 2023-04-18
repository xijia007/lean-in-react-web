import {createSlice} from "@reduxjs/toolkit";
import DBjobs from "./DBjobs.jsx";

const initialState = {DBjobs};

const DBJobsSlice = createSlice({
    name: "DBjobs",
    initialState,
    reducers: {
        DBjob(state, action) {
            state.DBjobs.push({...action.payload, _id: (new Date()).getTime()});

        },
    },
});

export default DBJobsSlice.reducer;

export const {DBjob} = DBJobsSlice.actions;