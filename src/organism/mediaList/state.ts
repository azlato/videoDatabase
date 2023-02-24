import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType, IFilter } from '../../molecule/filter/Filter'

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

interface IFilterData {
  value: string;
  type: FilterType;
}

interface ISortOrder {
  fieldName: string;
  sortOrderDescending: boolean;
}

interface IMediaListState {
    isLoading: boolean;
    error?: string;
    data: {
      items: IMediaItem[];
    };
    filters: {[key: string]: IFilterData};
    sort?: ISortOrder;
}

const initialState: IMediaListState = {
    isLoading: true,
    data: {
        items: []
    },
    filters: {},
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
    setFilterValue(state, {payload: {fieldName, type, value}}: PayloadAction<IFilter & {value: string}>) {
      state.filters[fieldName] = {type, value};
    },
    setSortValue(state, {payload}: PayloadAction<ISortOrder>) {
      state.sort = payload;
    }
  }
});

export const ACTION = mediaListSlice.actions;

export default mediaListSlice.reducer;
