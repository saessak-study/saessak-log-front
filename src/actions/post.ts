import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://52.78.251.23:8080';

export const loadPost = createAsyncThunk('post/loadPost', async () => {
  const response = await axios.get('/posts/commentsCount');
  return response.data;
});
