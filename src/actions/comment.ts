import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { commentAPIParams } from '../types/comment';
// 1~50개의 페이지 중 랜덤으로 한 페이지의 정보 20개를 받아오는 코드
// function getRandNumber() {
//   const ranNum = Math.floor(Math.random() * 50 + 1);
//   return ranNum;
// }

axios.defaults.baseURL = 'http://52.78.251.23:8080';

// http://52.78.251.23:8080/comment/1?limit=5&page=0&post=1
export const loadComment = createAsyncThunk(
  `comment/loadComment`,
  async (data: commentAPIParams) => {
    const response = await axios.get(
      `/comment/${data.postId}?limit=${data.limit}&page=${data.page}&post=${data.postId}`
    );
    return response.data;
  }
);
