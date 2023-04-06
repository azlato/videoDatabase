import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { FilterType, IFilter } from '../../molecule/filter/Filter';
import apiClient from '../../apiClient';
import md5 from '../../md5';

// eslint-disable-next-line max-len
const RESOURCE_URL = 'https://gist.githubusercontent.com/nextsux/f6e0327857c88caedd2dab13affb72c1/raw/04441487d90a0a05831835413f5942d58026d321/videos.json';
const NAMESPACE = 'mediaList';

interface IResponseItemData {
  name: string;
  iconUri: string;
  manifestUri: string;
  licenseServers: { [key: string]: string };
}

export interface IMediaItem {
  id: string;
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
  filters: { [key: string]: IFilterData };
  sort?: ISortOrder;
}

const initialState: IMediaListState = {
  isLoading: true,
  data: {
    items: [],
  },
  filters: {},
};

function createItem(requestMediaData: IResponseItemData): IMediaItem {
  return {
    id: md5(requestMediaData.name),
    name: requestMediaData.name,
    iconUri: requestMediaData.iconUri,
    manifestUri: requestMediaData.manifestUri,
    hasDrm: !!Object.keys(requestMediaData.licenseServers).length,
  };
}

export const fetchMediaList = createAsyncThunk<IResponseItemData[]>(
  `${NAMESPACE}/fetchMediaList`,
  async () => {
    const response = await apiClient.get<IResponseItemData[]>(RESOURCE_URL);
    return response.data;
  },
);

export const mediaListSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    setFilterValue(state, { payload: { fieldName, type, value } }: PayloadAction<IFilter & { value: string }>) {
      state.filters[fieldName] = { type, value };
    },
    setSortValue(state, { payload }: PayloadAction<ISortOrder>) {
      state.sort = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMediaList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMediaList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.items = action.payload.map(createItem);
      })
      .addCase(fetchMediaList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const ACTION = mediaListSlice.actions;

export default mediaListSlice.reducer;
