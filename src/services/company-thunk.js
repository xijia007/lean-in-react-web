import {createAsyncThunk} from "@reduxjs/toolkit"
import * as companyService from "./company-service";

export const findCompanyThunk = createAsyncThunk(
  'companies/findById', async (companyId) => {
    const company = await companyService.findCompany(companyId);
    return company;}
);

export const updateCompanyThunk = createAsyncThunk(
  'companies/updateById', async (companyId) => {
      const company = await companyService.updateCompany(companyId);
      return company;}
);