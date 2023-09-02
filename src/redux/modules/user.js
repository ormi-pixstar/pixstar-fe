import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios/axios.js';

const initialState = {
  isLog: false,
  id: 0,
  username: '',
};

// 회원가입
export const __signup = createAsyncThunk('signup', async (payload, api) => {
  try {
    const res = await axios.post(`user/signup/`, payload);
    return api.fulfillWithValue(res);
  } catch (err) {
    return api.rejectWithValue(err.response);
  }
});

// 로그인
export const __login = createAsyncThunk('login', async (payload, api) => {
  try {
    const res = await axios.post(`user/login/`, payload);
    return api.fulfillWithValue(res.data);
  } catch (err) {
    return api.rejectWithValue(err.response.data);
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
        state.isLog = true;
        state.id = action.payload.user.id;
        state.username = action.payload.user.username;
      })
      .addCase(__login.rejected, (state, action) => {
        state.isLog = false;
        alert(action.payload.detail[0]);
      });
  },
});

// actions
export const { setLogin } = userSlice.actions;

//reducer
export default userSlice.reducer;
