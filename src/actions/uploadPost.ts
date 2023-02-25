import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uploadPostContents } from '../types/uploadpost';

axios.defaults.baseURL = 'http://52.78.251.23:8080';
const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1NiIsInByb2ZpbGVJZCI6InF3ZXIxMjM0IiwiaWF0IjoxNjc3MzE0ODExLCJleHAiOjE2NzczMjQ4OTF9.1o7RhrczmJ1-dCUO6uDSiM0NMrQ_5Ucc8dv-Z1LpKxg';

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
