import { RootState } from '../../store/state';

export const itemsSelector = (state: RootState) => state.mediaList.data.items;
export const isLoadingSelector = (state: RootState) => state.mediaList.isLoading;
