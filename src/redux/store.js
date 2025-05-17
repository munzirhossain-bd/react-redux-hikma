import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/features/counter/counterSlice';
import postReducer from '../redux/features/posts/postsSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});