import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios/axios.js';
import setToken from '../../axios/setToken';

const initialState = {
  isLog: false,
};

// 회원가입
export const __signup = createAsyncThunk('signup', async (payload, api) => {
  try {
    const res = await axios.post(`users/signup`, payload);
    console.log(res);
  } catch (err) {
    return api.rejectWithValue(err);
  }
});

// 로그인
export const __login = createAsyncThunk('login', async (payload, api) => {
  try {
    const res = await axios.post(`users/login/`, payload);
    console.log(res);
  } catch (err) {
    return api.rejectWithValue(err.response.status);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLog = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // 회원가입
      .addCase(__signup.fulfilled, (state, action) => {
        state.isLog = false;
      })
      .addCase(__signup.rejected, (state, action) => {
        state.isLog = false;
      })

      // 로그인
      .addCase(__login.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload);
        setToken(action.payload);
        state.isLog = true;
      })
      .addCase(__login.rejected, (state, action) => {
        state.isLog = false;
      });
  },
});

// actions
export const { setLogin } = userSlice.actions;

//reducer
export default userSlice.reducer;
