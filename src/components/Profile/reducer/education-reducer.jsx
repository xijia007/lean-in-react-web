import {createSlice} from "@reduxjs/toolkit";
import educations from "./educations";

const initialState = {educations};

const educationSlice = createSlice({
    name: "educations",
    initialState,
    reducers: {
        // updateEducation: (state, action) => {
        //     const index = state.findIndex(e => e._id === action.payload._id);
        //     state.educations[index] = action.payload;
        // },
        addEducation(state, action) {
            state.educations.push({...action.payload, _id: (new Date()).getTime()});
        },
        deleteEducation(state, action) {
            state.educations = state.educations.filter(e => e._id !== action.payload);
        },
    },
});

export default educationSlice.reducer;

export const {addEducation, deleteEducation, updateEducation} = educationSlice.actions;