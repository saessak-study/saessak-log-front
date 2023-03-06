import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Ipassword } from '../types/user';

axios.defaults.baseURL = 'http://52.78.251.23:8080';

export const loadMyInfo = createAsyncThunk('/user/loadMyInfo', async () => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.get('/user/information', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return console.error(error);
  }
});

export const changePassword = createAsyncThunk('/user/changePassword', async (data: Ipassword) => {
  try {
    const token = sessionStorage.getItem('token');
    const response = await axios.patch('/user/updatePassword', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return console.error(error);
  }
});

// export const subscribe = createAsyncThunk('/user/subscribe', async (postId: number) => {
//   try {
//     const token = sessionStorage.getItem('token');
//     const response = await axios.get(
//       `/subscribe/${postId}
//     `,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data.responseMessage;
//   } catch (error) {
//     return console.error(error);
//   }
// });
