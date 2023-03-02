import { IcardListState } from '../types/card';
import { createSlice } from '@reduxjs/toolkit';
import { getCardList } from '../actions/viewCardList';

export const initialState: IcardListState = {
  loadCardList: [],
  loadCardListLoading: false,
  loadCardListDone: false,
  loadCardListError: null,
};

const cardListSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCardList.pending, (state) => {
        state.loadCardListLoading = true;
        state.loadCardListDone = false;
        state.loadCardListError = null;
      })
      .addCase(getCardList.fulfilled, (state, action) => {
        state.loadCardList = action.payload;
        state.loadCardListLoading = false;
        state.loadCardListDone = true;
        state.loadCardListError = null;
      })
      .addCase(getCardList.rejected, (state, action) => {
        state.loadCardListLoading = false;
        state.loadCardListError = action.error.message;
      })
      .addDefaultCase((state) => state),
});

export default cardListSlice;
