import {createAsyncThunk} from "@reduxjs/toolkit"
import * as userService from "./user-service"


export const findAllUsersThunk = createAsyncThunk(
  'users/findAll', async () => {
    const users = await userService.findUsers();
    return users;}
);

export const findUserByIdThunk = createAsyncThunk(
  'users/findById', async (id) => {
    const user = await userService.findUser(id);
    return user;}
);

export const updateUserThunk = createAsyncThunk(
  'users/update', async (uid, newUser) => {
    await userService.updateUser(uid, newUser);
    return newUser;}
);