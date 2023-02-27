import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { commentAPIParams, createComment } from '../types/comment';

axios.defaults.baseURL = 'http://52.78.251.23:8080';

const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1NiIsInByb2ZpbGVJZCI6InF3ZXIxMjM0IiwiaWF0IjoxNjc3Mzk1Nzc2LCJleHAiOjE2Nzc0MDU4NTZ9.ZNA8N67HetCmboq7DTjfbMw74P4eE4nUhVA9EQYPlRs';
const headers = {
  Authorization: `Bearer ${accessToken}`,
};

// http://52.78.251.23:8080/comment/1?limit=5&page=0&post=1
export const loadComment = createAsyncThunk(
  `/comment/loadComment`,
  async (data: commentAPIParams) => {
    const response = await axios.get(
      `/comment/${data.postId}?limit=${data.limit}&page=${data.page}&post=${data.postId}`
    );
    return response.data;
  }
);

export const writeComment = createAsyncThunk(
  `/comment`,
  async (data: createComment, { rejectWithValue }) => {
    try {
      const response = await axios.post('/comment', data, { headers });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
