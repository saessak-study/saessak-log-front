import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uploadPostContents } from '../types/uploadpost';

axios.defaults.baseURL = 'http://52.78.251.23:8080';
const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjIxMiIsInByb2ZpbGVJZCI6InF3ZXIxMjM1IiwiaWF0IjoxNjc3NDMwMjg0LCJleHAiOjE2Nzc0NDAzNjR9.y_v6RgYSI9OVp-y0txXkkskJq4uuUr2bTezEFZqzxpo';
export const uploadPost = createAsyncThunk(
  '/posts/new',
  async (data: uploadPostContents, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append('imageFile', data.imageFile);
    formData.append('imageFile', data.postText);
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
