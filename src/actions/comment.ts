import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// 1~50개의 페이지 중 랜덤으로 한 페이지의 정보 20개를 받아오는 코드
// function getRandNumber() {
//   const ranNum = Math.floor(Math.random() * 50 + 1);
//   return ranNum;
// }

// axios.defaults.baseURL = '';

// export const loadComment = createAsyncThunk(
//   'get/loadComment',
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(axios.defaults.baseURL, {
//         params: {
//           ///
//         },
//       });
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );

/**
 * 위 코드 기준으로 전달 받은 액션 타입 문자열을 기준으로 프로미스 상태에 따른
 * thuck action creator를 반환
 * - get/loadComment/pending
 * - get/loadComment/fulfilled
 * - get/loadComment/rejected
 * 세 가지 thunk action creator가 반환된다고 생각할 수 있다.
 * 여기서 디스패치 되면 pending상태에서 비동기 요청 성공, 실패에 따라 fulfilled또는 rejected 액션이 디스패치 된다.
 *
 */
