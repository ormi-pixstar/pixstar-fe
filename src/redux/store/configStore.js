import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../modules/user';
import postSlice from '../modules/post.js';
import commentSlice from '../modules/comment.js';

const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    comment: commentSlice,
  },
});

export default store;
