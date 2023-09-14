import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios/axios.js';

const initialState = {
  postList: [],
  postDetail: {},
};

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

// 포스트 작성
export const __submitPost = createAsyncThunk(
  'submitPost',
  async (payload, api) => {
    console.log(payload);
    try {
      const res = await axios.post(`post/write/`, payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return api.fulfillWithValue(res.data);
    } catch (err) {
      console.log(err);
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
        state.postList = action.payload.results;
      })
      .addCase(__getPostList.rejected, (state, action) => {
        console.log(action.payload); // 예외처리 추가 필요
      })

      // 포스트 상세 조회
      .addCase(__getPostDetail.fulfilled, (state, action) => {
        state.postDetail = action.payload;
      })
      .addCase(__getPostDetail.rejected, (state, action) => {
        console.log(action.payload); // 예외처리 추가 필요
      })

      // 포스트 작성
      .addCase(__submitPost.fulfilled, (state, action) => {
        state.postDetail = action.payload;
      })
      .addCase(__submitPost.rejected, (state, action) => {
        console.log(action.payload); // 예외처리 추가 필요
      });
  },
});

export default postSlice.reducer;
