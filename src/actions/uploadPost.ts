import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uploadPostContents } from '../types/uploadpost';

axios.defaults.baseURL = 'http://52.78.251.23:8080';
const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1NiIsInByb2ZpbGVJZCI6InF3ZXIxMjM0IiwiaWF0IjoxNjc3MzgyMjUzLCJleHAiOjE2NzczOTIzMzN9.lOA7A9vnG_Wos3zJAsllF5KIrkcdCzU5nP8G-PT7A6o';
const headers = {
  Authorization: `Bearer ${accessToken}`,
};

export const uploadPost = createAsyncThunk(
  '/posts/new',
  async (data: uploadPostContents, { rejectWithValue }) => {
    try {
      const response = await axios.post('/posts/new', data, { headers });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
