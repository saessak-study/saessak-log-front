import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uploadPost } from '../types/post';

// axios.defaults.baseURL = '';

// export const uploadPost = createAsyncThunk<uploadPost>('/newPost',  async () => {
//   try {
//     const response = await axios.post('/newPost');
//     return response.data;
//   } catch (error) {
//     return error.response.data;
//   });
