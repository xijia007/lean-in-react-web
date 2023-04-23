import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchTerm: '',
    // searchTerm: 'test',
};

const searchSlice = createSlice({
    name: 'searchTerm',
    initialState,
    reducers: {
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
});

export default searchSlice.reducer;
export const { updateSearchTerm } = searchSlice.actions;