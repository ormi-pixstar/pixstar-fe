import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios/axios.js';

const initialState = [];

// 포스트 조회 및 검색
export const __getPostList = createAsyncThunk(
  'getPostList',
  async (payload, api) => {
    try {
      const res = await axios.get(`post/list/`, {
        params: { ...payload },
      });
      return api.fulfillWithValue(res.data);
    } catch (err) {
      return api.rejectWithValue(err.stack);
    }
  }
);

// 포스트 상세 정보
export const __getPostDetail = createAsyncThunk(
  'getPostDetail',
  async (payload, api) => {
    try {
      const res = await axios.get(`post/detail/${payload}/`);
      return api.fulfillWithValue(res.data);
    } catch (err) {
      return api.rejectWithValue(err.stack);
    }
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 포스트 목록 조회
      .addCase(__getPostList.fulfilled, (state, action) => {
        // console.log(action.payload);
      })
      .addCase(__getPostList.rejected, (state, action) => {
        // console.log(action.payload);
      })
      // 포스트 상세 조회
      .addCase(__getPostDetail.fulfilled, (state, action) => {
        // console.log(action.payload);
      })
      .addCase(__getPostDetail.rejected, (state, action) => {
        // console.log(action.payload);
      });
  },
});

export default postSlice.reducer;
