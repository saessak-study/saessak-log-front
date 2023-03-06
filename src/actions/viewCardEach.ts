import { singlePostAPIParam } from '../types/card';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://52.78.251.23:8080';

export const getSinglePost = createAsyncThunk(`/posts`, async (data: singlePostAPIParam) => {
  const response = await axios.get(`/posts/${data.postID}`);
  return response.data;
});
