import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uploadPostState } from '../types/post';

axios.defaults.baseURL = 'http://52.78.251.23:8080';

export const uploadPost = createAsyncThunk('/posts/new', async (data: uploadPostState) => {
  const response = await axios.post('/posts/new');
  return response.data;
});
