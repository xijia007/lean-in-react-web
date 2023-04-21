import {createAsyncThunk} from "@reduxjs/toolkit"
import * as companyService from "./company-service";

export const findCompanyThunk = createAsyncThunk(
  'companies/findById', async (id) => {
    const company = await companyService.findCompany(id);
    return company;}
);