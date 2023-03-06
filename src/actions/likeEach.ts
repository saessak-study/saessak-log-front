import { IlikeEach } from '../types/likeEach';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://52.78.251.23:8080';

export const changeLike = createAsyncThunk('/like', async (data: IlikeEach) => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.get(`/like/${data.postID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return console.error(error);
  }
});
