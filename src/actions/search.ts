import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://52.78.251.23:8080';

// export const getCardList = createAsyncThunk(`/posts`, async (data) => {
//   const response = await axios.get(`/posts/commentsCount?limit=${data.limit}&page=${data.page}`);
//   return response.data.postMainDtoList;
// });
