import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios/axios.js';

const initialState = {
  comments: [],
};

// 댓글 조회 및 검색
export const __getComments = createAsyncThunk(
  'getComments',
  async (payload, api) => {
    try {
      const res = await axios.get(`post/detail/${payload}/comment/`);
      return api.fulfillWithValue(res.data);
    } catch (err) {
      return api.rejectWithValue(err.stack);
    }
  }
);

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 댓글 목록 조회
      .addCase(__getComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(__getComments.rejected, (state, action) => {
        console.log(action.payload); // 예외처리 추가 필요
      });
  },
});

export default commentSlice.reducer;
