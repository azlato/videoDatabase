import { RootState } from '../../store/state';
import { FilterType } from '../../molecule/filter/Filter';

export const itemsSelector = ({mediaList: {data: {items}, filters}}: RootState) => {
    if (!Object.keys(filters).length) {
        return items;
    }
    const filterEntries = Object.entries(filters);

    return items.filter(item => filterEntries.every(([itemFieldName, filter]) => {
        console.log()
        type ObjectKey = keyof typeof item;
        const itemKey = itemFieldName as ObjectKey;
        // if (!item[itemKey]) {
        //     return true;
        // }

        console.log(itemFieldName, item.hasDrm, item.name);

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
export const isLoadingSelector = (state: RootState) => state.mediaList.isLoading;
export const isErrorStateSelector = (state: RootState) => !!state.mediaList.error;
