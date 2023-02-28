import { createSlice } from '@reduxjs/toolkit';
import { changePassword, loadMyInfo } from '../actions/user';
import { Iuser } from '../types/user';

export const initialState: Iuser = {
  myInfo: { profileId: null, email: null, name: null },
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  changePasswordLoading: false,
  changePasswordDone: false,
  changePasswordError: null,
};

const userSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadMyInfo.pending, (state) => {
        state.loadMyInfoLoading = true;
        state.loadMyInfoDone = false;
        state.loadMyInfoError = null;
      })
      .addCase(loadMyInfo.fulfilled, (state, action) => {
        state.loadMyInfoLoading = false;
        state.loadMyInfoDone = true;
        state.myInfo = action.payload;
        state.loadMyInfoError = null;
      })
      .addCase(loadMyInfo.rejected, (state, action) => {
        state.loadMyInfoLoading = false;
        state.loadMyInfoDone = false;
        state.loadMyInfoError = action.error.message;
      })
      .addCase(changePassword.pending, (state) => {
        state.changePasswordLoading = true;
        state.changePasswordDone = false;
        state.changePasswordError = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.changePasswordLoading = false;
        state.changePasswordDone = true;
        state.changePasswordError = null;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.changePasswordLoading = false;
        state.changePasswordDone = false;
        state.changePasswordError = action.error.message;
      })
      .addDefaultCase((state) => state),
});

export default userSlice;
