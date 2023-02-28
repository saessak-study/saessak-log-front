import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uploadPostContents } from '../types/uploadpost';

axios.defaults.baseURL = 'http://52.78.251.23:8080';
const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjIxMiIsInByb2ZpbGVJZCI6InF3ZXIxMjM1IiwiaWF0IjoxNjc3NDc3MjI5LCJleHAiOjE2Nzc0ODczMDl9.rMpx2slXNHdfBpaxCVXfb4edxis8BOZEVYkTWHi2GqE';
export const uploadPost = createAsyncThunk(
  '/posts/new2',
  async (data: uploadPostContents, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append('imageFile', data.imageFile);
    formData.append('postText', data.postText);
    try {
      const response = await axios.post('/posts/new2', formData, {
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
