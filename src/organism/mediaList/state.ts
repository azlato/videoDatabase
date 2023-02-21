import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IMediaItem {
  name: string;
}

interface IMediaListState {
    isLoading: boolean;
    error?: string;
    data: {
      items: IMediaItem[];
    };
}

const initialState: IMediaListState = {
    isLoading: true,
    data: {
        items: []
    }
}

export const mediaListSlice = createSlice({
  name: "mediaList",
  initialState,
  reducers: {
    loading(state) {
      state.isLoading = true;
    },
    loadingDone(state, action: PayloadAction<IMediaItem[]>) {
      state.data.items = action.payload;
      state.isLoading = false;
    },
    loadingError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  }
});

export const ACTION = mediaListSlice.actions;

export default mediaListSlice.reducer;
