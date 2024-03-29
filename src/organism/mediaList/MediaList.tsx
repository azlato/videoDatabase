import React, { useEffect, useCallback } from 'react';
import { Grid, Paper } from '@mui/material';
import MediaListMolecule from '../../molecule/mediaList/MediaList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Filter, { IFilter, FilterType } from '../../molecule/filter/Filter';
import Sort, { ISort } from '../../molecule/sort/Sort';
import { filteredItemsSelector, isLoadingSelector, isErrorStateSelector } from './selector';
import { ACTION, fetchMediaList } from './state';

const FILTERS: IFilter[] = [{
  label: 'Name',
  fieldName: 'name',
  type: FilterType.String,
}, {
  label: 'Has DRM',
  fieldName: 'hasDrm',
  type: FilterType.Boolean,
}];

const SORT: ISort[] = [{
  label: 'Name',
  fieldName: 'name',
}];

function MediaList() {
  const isErrorState = useAppSelector(isErrorStateSelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const items = useAppSelector(filteredItemsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMediaList());
  }, [dispatch]);

  const onFilterChange = useCallback((filter: IFilter, value: string) => {
    dispatch(ACTION.setFilterValue({ ...filter, value }));
  }, [dispatch]);

  const onSortChange = useCallback((fieldName: string, sortOrderDescending: boolean) => {
    dispatch(ACTION.setSortValue({ fieldName, sortOrderDescending }));
  }, [dispatch]);

  return (
    <>
      <Paper elevation={1} sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item>
            <Filter filters={FILTERS} onChange={onFilterChange} />
          </Grid>
          <Grid item>
            <Sort fields={SORT} onChange={onSortChange} />
          </Grid>
        </Grid>
      </Paper>
      <MediaListMolecule isErrorState={isErrorState} isLoading={isLoading} items={items} />
    </>
  );
}

export default React.memo(MediaList);
