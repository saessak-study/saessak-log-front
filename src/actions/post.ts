import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://52.78.251.23:8080';

export const loadMyPost = createAsyncThunk('/post/loadMyPost', async (data) => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.get(`/posts/myActivity?limit=6&page=${1}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
});
