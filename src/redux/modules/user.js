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
    restoreUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.isLog = true;
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

        // 로컬스토리지에 로그인한 유저 정보를 저장
        localStorage.setItem('isLog', 'true');
        localStorage.setItem('id', action.payload.user.id);
        localStorage.setItem('username', action.payload.user.username);
      })
      .addCase(__login.rejected, (state, action) => {
        state.isLog = false;
        alert(action.payload.detail[0]);
      });
  },
});

// actions
export const { restoreUser } = userSlice.actions;

//reducer
export default userSlice.reducer;
