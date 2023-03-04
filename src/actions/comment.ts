import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { commentAPIParams, createCommentData } from '../types/comment';

axios.defaults.baseURL = 'http://52.78.251.23:8080';

export const loadComment = createAsyncThunk(
  `/comment/loadComment`,
  async (data: commentAPIParams) => {
    const response = await axios.get(`/comment/${data.postID}?limit=5&page=${data.pageNum}`);
    return response.data;
  }
);

export const createComment = createAsyncThunk(
  `/comment`,
  async (data: createCommentData, { rejectWithValue }) => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.post('/comment', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
