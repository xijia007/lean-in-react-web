import {createAsyncThunk} from "@reduxjs/toolkit"
import * as userService from "./user-service"


export const findAllUsersThunk = createAsyncThunk(
  'users/findAll', async () => {
    const users = await userService.findUsers();
    return users;}
);

export const findUserThunk = createAsyncThunk(
  'users/findById', async (uid) => {
    const user = await userService.findUser(uid);
    return user;}
);

export const deleteAuthUserThunk = createAsyncThunk(
  'users/delete', async (uid) => {
    await userService.deleteAuthUser(uid);
    return id;}
);

export const updateUserThunk = createAsyncThunk(
  'users/update', async (newUser) => {
    await userService.updateUser(newUser);
    return newUser;}
);

export const recordCurrentUserThunk = createAsyncThunk(
  'users/recordCurrentUser', async (user) => {
      const response = await userService.recordCurrentUser(user);
      return response.data;}
);

export const removeCurrentUserThunk = createAsyncThunk(
  'users/removeCurrentUser', async () => {
      await userService.removeCurrentUser();}
);

export const currentUserProfileThunk = createAsyncThunk(
  'users/currentUserProfile', async () => {
      const response = await userService.currentUserProfile();
      return response.data;}
);