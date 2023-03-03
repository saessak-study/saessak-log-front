import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uploadPostContents } from '../types/uploadpost';

axios.defaults.baseURL = 'http://52.78.251.23:8080';
const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjIxMiIsInByb2ZpbGVJZCI6InF3ZXIxMjM1IiwiaWF0IjoxNjc3NzQ1NTA3LCJleHAiOjE2Nzc3NTU1ODd9.4tc_g7zVfJdSlu2NViUzb4s94yX9jUg1M5YCa5zylUY';
const headers = {
  Authorization: `Bearer ${accessToken}`,
};

export const uploadPost = createAsyncThunk(
  '/posts/new',
  async (data: uploadPostContents, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('postText', data.postText);
    try {
      const response = await axios.post('/posts/new', formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
