import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movies/moviesSlice';

export const store = configureStore({
  reducer: {
    movieReducer: movieReducer,
  },
  devTools: true
});

export default store;
