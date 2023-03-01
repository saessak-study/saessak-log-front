import { cardAPIParams } from '../types/card';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://52.78.251.23:8080';

export const getLikePriority = createAsyncThunk(`/posts`, async (data: cardAPIParams) => {
  const response = await axios.get(`/posts/likeCount?limit=${data.limit}&page=${data.page}`);
  return response.data.postMainDtoList;
});

export const getCommentPriority = createAsyncThunk(`/posts`, async (data: cardAPIParams) => {
  const response = await axios.get(`/posts/commentsCount?limit=${data.limit}&page=${data.page}`);
  return response.data.postMainDtoList;
});
