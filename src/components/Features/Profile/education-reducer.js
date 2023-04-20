import { createSlice } from '@reduxjs/toolkit';
// import educations from './educations';
import { convertDate } from '../../../utils/timeUtil';

// const initialState2 = { educations };

const initialState = {
  educations: [],
};

const educationSlice = createSlice({
  name: 'educations',
  initialState,
  reducers: {
    // updateEducation: (state, action) => {
    //     const index = state.findIndex(e => e._id === action.payload._id);
    //     state.educations[index] = action.payload;
    // },
    addEducation(state, action) {
      const {
        education_id: id,
        degree: role,
        description,
        school_name: entityName,
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

      const existingEducation = state.educations.find(
        (education) => education.id === id
      );

      if (existingEducation) {
        // If the education object already exists, replace it with the new data
        return {
          ...state,
          educations: state.educations.map((education) => {
            if (education.id === id) {
              return newState;
            }
            return education;
          }),
        };
      }
      // If the education object does not exist, add it to the array
      return {
        ...state,
        educations: [...state.educations, newState],
      };

      // state.educations.push(newState);
    },
    deleteEducation(state, action) {
      state.educations = state.educations.filter(
        (e) => e.id !== action.payload
      );
    },
  },
});

export default educationSlice.reducer;

export const { addEducation, deleteEducation, updateEducation } =
  educationSlice.actions;
