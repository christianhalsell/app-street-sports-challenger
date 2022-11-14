import { configureStore } from '@reduxjs/toolkit';
import scoresReducer from '../features/scores/scoresSlice';

export const store = configureStore({
  reducer: {
    scores: scoresReducer
  }
});
