import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios/axios.js';
import setToken from '../../axios/setToken';

const initialState = [];

// 포스트 조회 및 검색
export const __getPostList = createAsyncThunk(
  'getPostList',
  async (payload, api) => {
    try {
      const res = await axios.get(`list/`, {
        params: { payload },
      });
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
      .addCase(__getPostList.fulfilled, (state, action) => {
        // console.log(action.payload);
      })
      .addCase(__getPostList.rejected, (state, action) => {
        // console.log(action.payload);
      });
  },
});

export default postSlice.reducer;
