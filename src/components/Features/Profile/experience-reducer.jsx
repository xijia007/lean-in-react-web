import {createSlice} from "@reduxjs/toolkit";
import { convertDate } from "../../../utils/timeUtil.js";

const initialState = {experiences: [],};

const experienceSlice = createSlice({
    name: "experiences",
    initialState,
    reducers: {
        addExperience(state, action) {
            const {
                experience_id: id,
                role,
                description,
                entityName,
                start_time: start,
                end_time: end,
            } = action.payload;
            const newState = {
                id,
                role,
                description,
                entityName,
                start: convertDate(start),
                end: convertDate(end),
            };

            const existingExperience = state.experiences.find(
              (experience) => experience.id === id
            );

            if (existingExperience) {
                // If the experience object already exists, replace it with the new data
                return {
                    ...state,
                    experiences: state.experiences.map((experience) => {
                        if (experience.id === id) {
                            return newState;
                        }
                        return experience;
                    }),
                };
            }
            // If the experience object does not exist, add it to the array
            return {
                ...state,
                experiences: [...state.experiences, newState],
            };
        },
        deleteExperience(state, action) {
            state.experiences = state.experiences.filter(e => e.id !== action.payload);
        },
    },
});

export default experienceSlice.reducer;

export const {addExperience, deleteExperience} = experienceSlice.actions;