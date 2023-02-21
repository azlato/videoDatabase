import { useEffect } from 'react';
import Spinner from '../../atom/Spinner';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { itemsSelector, isLoadingSelector, isErrorStateSelector } from './selector';
import { ACTION } from './state';

const RESOURCE_URL = "https://gist.githubusercontent.com/nextsux/f6e0327857c88caedd2dab13affb72c1/raw/04441487d90a0a05831835413f5942d58026d321/videos.json";
const LOCAL_STORAGE_KEY = "mediaList";

function MediaList() {
    const isErrorState = useAppSelector(isErrorStateSelector);
    const isLoading = useAppSelector(isLoadingSelector);
    const items = useAppSelector(itemsSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(ACTION.loading());

        fetch(RESOURCE_URL).then((response) => response.json()).then((data) => {
            dispatch(ACTION.loadingDone(data));

            window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
        }).catch((error) => {
            const localData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
            if (localData) {
                try {
                    dispatch(ACTION.loadingDone(JSON.parse(localData)));
                } catch(error) {
                    dispatch(ACTION.loadingError("Local data could not be parsed"));
                }
            } else {
                dispatch(ACTION.loadingError(`Fetch error: ${JSON.stringify(error)}`));
            }

        });
    }, []);

    if (isErrorState) {
        return <div>Data could not be loaded</div>;
    }

    return <div>
        <h1>Media list</h1>
        {isLoading ?
            <Spinner/>
        :
            <ul>
                {items.map((item: any) => (<li key={item.name}>{item.name}</li>))}
            </ul>
        }
    </div>
}

export default MediaList;
