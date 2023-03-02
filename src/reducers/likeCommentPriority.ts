import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
  value: true,
};

const likePrioritySlice = createSlice({
  name: 'isLikePriority',
  initialState,
  reducers: {
    isLikePriority: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export default likePrioritySlice;
