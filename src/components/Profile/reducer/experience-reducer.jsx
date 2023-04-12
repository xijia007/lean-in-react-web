import {createSlice} from "@reduxjs/toolkit";
import experiences from "./experiences";

const initialState = {experiences};

const experienceSlice = createSlice({
    name: "experiences",
    initialState,
    reducers: {
        // updateExperience: (state, action) => {
        //     const index = state.findIndex(e => e._id === action.payload._id);
        //     state.educations[index] = action.payload;
        // },
        addExperience(state, action) {
            state.experiences.push({...action.payload, _id: (new Date()).getTime()});
        },
        deleteExperience(state, action) {
            state.experiences = state.experiences.filter(e => e._id !== action.payload);
        },
    },
});

export default experienceSlice.reducer;

export const {addExperience, deleteExperience} = experienceSlice.actions;