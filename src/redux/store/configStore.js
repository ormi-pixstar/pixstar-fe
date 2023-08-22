import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../modules/user';
import postSlice from '../modules/post.js';

const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
  },
});

export default store;
