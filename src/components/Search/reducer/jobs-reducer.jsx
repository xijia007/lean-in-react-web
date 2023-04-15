import { createSlice } from "@reduxjs/toolkit";
import jobs from "./jobs.jsx";

const jobsSlice = createSlice({
    name: "jobs",
    initialState: jobs
});

export default jobsSlice.reducer;