import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uploadPostContents } from '../types/uploadpost';

axios.defaults.baseURL = 'http://52.78.251.23:8080';
const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE1NiIsInByb2ZpbGVJZCI6InF3ZXIxMjM0IiwiaWF0IjoxNjc3NTgwNjMzLCJleHAiOjE2Nzc1OTA3MTN9.xhFT4Je13rQM0genn8kQDvFzXe1LcoEiDujFkBMUnxE';
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
