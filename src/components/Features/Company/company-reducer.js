import { createSlice } from '@reduxjs/toolkit';
import { findCompanyThunk } from "../../../services/company-thunk.js";

const initialState = {
  company : {
    "company_id": 1,
    "name": "Google",
    "description": "Google is an internet search engine. It uses a proprietary algorithm that's designed to retrieve and order search results to provide the most relevant and dependable sources of data possible.",
    "location": "1600 Amphitheatre Parkway Mountain View, CA 94043",
    "url": "https://www.google.com/"
  }
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  extraReducers: {
    [findCompanyThunk.fulfilled]: (state, action) => {
      state.company = action.payload;
    },
  }
});

export default companySlice.reducer;