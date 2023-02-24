import { useEffect } from 'react';
import MediaListMolecule from '../../molecule/mediaList/MediaList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Filter, { IFilter, FilterType } from '../../molecule/filter/Filter';
import { filteredItemsSelector, isLoadingSelector, isErrorStateSelector } from './selector';
import { ACTION } from './state';

const RESOURCE_URL = 'https://gist.githubusercontent.com/nextsux/f6e0327857c88caedd2dab13affb72c1/raw/04441487d90a0a05831835413f5942d58026d321/videos.json';
const LOCAL_STORAGE_KEY = 'mediaList';

const FILTERS: IFilter[] = [{
    label: 'Name',
    fieldName: 'name',
    type: FilterType.String,
}, {
    label: 'Has DRM',
    fieldName: 'hasDrm',
    type: FilterType.Boolean,
}];

function MediaList() {
    const isErrorState = useAppSelector(isErrorStateSelector);
    const isLoading = useAppSelector(isLoadingSelector);
    const items = useAppSelector(filteredItemsSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const abortController = new AbortController();
        fetch(RESOURCE_URL, {signal: abortController.signal})
            .then((response) => response.json())
            .then((data) => {
                dispatch(ACTION.loadingDone(data));

                window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
            }).catch((error) => {
                if (abortController.signal.aborted) {
                    return;
                }

                const localData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
                if (localData) {
                    try {
                        dispatch(ACTION.loadingDone(JSON.parse(localData)));
                    } catch(error) {
                        dispatch(ACTION.loadingError('Local data could not be parsed'));
                    }
                } else {
                    dispatch(ACTION.loadingError(`Fetch error: ${JSON.stringify(error)}`));
                }

            });

        return () => {
            abortController.abort();
        };
    }, [dispatch]);

    const onFilterChange = (filter: IFilter, value: string) => {
        dispatch(ACTION.setFilterValue({...filter, value}));
    }

    return <>
        <Filter filters={FILTERS} onChange={onFilterChange} />
        <MediaListMolecule isErrorState={isErrorState} isLoading={isLoading} items={items}/>
    </>
}

export default MediaList;
