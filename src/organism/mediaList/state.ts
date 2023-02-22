import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface IRequestMediaData {
  name: string;
  iconUri: string;
  manifestUri: string;
  licenseServers: {[key: string]: string};
}

export interface IMediaItem {
  name: string;
  iconUri: string;
  manifestUri: string;
  hasDrm: boolean;
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

function createItem(requestMediaData: IRequestMediaData): IMediaItem {
  return {
    name: requestMediaData.name,
    iconUri: requestMediaData.iconUri,
    manifestUri: requestMediaData.manifestUri,
    hasDrm: !!Object.keys(requestMediaData.licenseServers).length,
  }
}

export const mediaListSlice = createSlice({
  name: "mediaList",
  initialState,
  reducers: {
    loading(state) {
      state.isLoading = true;
    },
    loadingDone(state, action: PayloadAction<IRequestMediaData[]>) {
      state.data.items = action.payload.map(createItem);
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
