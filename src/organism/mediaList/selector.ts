import { createSelector } from 'reselect';
import { RootState } from '../../store/state';
import { FilterType } from '../../molecule/filter/Filter';

const itemsSelector = ({mediaList: {data: {items}}}: RootState) => items;
const filtersSelector = ({mediaList: {filters}}: RootState) => filters;
export const isLoadingSelector = (state: RootState) => state.mediaList.isLoading;
export const isErrorStateSelector = (state: RootState) => !!state.mediaList.error;

export const filteredItemsSelector = createSelector(
    [itemsSelector, filtersSelector],
    (items, filters) => {
        if (!Object.keys(filters).length) {
            return items;
        }
        const filterEntries = Object.entries(filters);

        return items.filter(item => filterEntries.every(([itemFieldName, filter]) => {
            type ObjectKey = keyof typeof item;
            const itemKey = itemFieldName as ObjectKey;
            switch (filter.type) {
                case FilterType.String:
                    return item[itemKey].toString().toLowerCase().includes(filter.value.toLowerCase());
                case FilterType.Boolean:
                    return filter.value === "" || item[itemKey].toString() === filter.value;
                default:
                    return true;
            }
        }));
    }
)
