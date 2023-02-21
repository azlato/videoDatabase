import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mediaListReducer from '../organism/mediaList/state';

export const store = configureStore({
  reducer: {
    mediaList: mediaListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
