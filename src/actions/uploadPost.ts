import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uploadPostContents } from '../types/uploadpost';

axios.defaults.baseURL = 'http://52.78.251.23:8080';
const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1NiIsInByb2ZpbGVJZCI6InF3ZXIxMjM0IiwiaWF0IjoxNjc3Mzk1Nzc2LCJleHAiOjE2Nzc0MDU4NTZ9.ZNA8N67HetCmboq7DTjfbMw74P4eE4nUhVA9EQYPlRs';
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
