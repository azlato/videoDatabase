import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/state';
import { FilterType } from '../../molecule/filter/Filter';
import { IMediaItem } from './state';
import Checked from '../../atom/indeterminateCheckbox/Checked';

const itemsSelector = ({ mediaList: { data: { items } } }: RootState) => items;
const filtersSelector = ({ mediaList: { filters } }: RootState) => filters;
const sortSelector = ({ mediaList: { sort } }: RootState) => sort;
export const isLoadingSelector = (state: RootState) => state.mediaList.isLoading;
export const isErrorStateSelector = (state: RootState) => !!state.mediaList.error;

export const filteredItemsSelector = createSelector(
  [itemsSelector, filtersSelector, sortSelector],
  (items, filters, sort) => {
    const filterEntries = Object.entries(filters);
    const filteredItems: IMediaItem[] = Object.keys(filters).length
      ? items.filter((item) => filterEntries.every(([itemFieldName, filter]) => {
            type ObjectKey = keyof typeof item;
            const itemKey = itemFieldName as ObjectKey;
            switch (filter.type) {
              case FilterType.String:
                return item[itemKey].toString().toLowerCase().includes(filter.value.toLowerCase());
              case FilterType.Boolean:
                return (
                  filter.value === Checked.Unchecked
                  || (item[itemKey] === true && filter.value === Checked.Checked)
                  || (item[itemKey] === false && filter.value === Checked.Indeterminate)
                );
              default:
                return true;
            }
      })) : items;

    if (sort) {
      return filteredItems.slice().sort((a: IMediaItem, b: IMediaItem) => {
                type ObjectKey = keyof typeof a;
                const itemKey = sort.fieldName as ObjectKey;
                const aValue = `${a[itemKey]}`;
                const bValue = `${b[itemKey]}`;

                return (
                  sort.sortOrderDescending
                    ? bValue.localeCompare(aValue, 'cs', { numeric: true })
                    : aValue.localeCompare(bValue, 'cs', { numeric: true })
                );
      });
    }

    return filteredItems;
  },
);
