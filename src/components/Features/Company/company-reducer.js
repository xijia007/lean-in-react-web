import { createSlice } from '@reduxjs/toolkit';
import { findCompanyThunk, updateCompanyThunk } from "../../../services/company-thunk.js";

const initialState = {
  company : {
    "company_id": 1,
    "name": "",
    "description": "",
    "location": "",
    "url": ""
  }
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  extraReducers: {
    [findCompanyThunk.fulfilled]: (state, action) => {
      state.company = action.payload;
      console.log("found company: ", action.payload)
    },
    [updateCompanyThunk.fulfilled]: (state, action) => {
      state.company = action.payload;
    },
  }
});

export default companySlice.reducer;