import { useEffect } from 'react';
import Spinner from '../../atom/Spinner';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { itemsSelector, isLoadingSelector } from './selector';
import { ACTION } from './state';

const RESOURCE_URL = "https://gist.githubusercontent.com/nextsux/f6e0327857c88caedd2dab13affb72c1/raw/04441487d90a0a05831835413f5942d58026d321/videos.json";

function MediaList() {
    const isLoading = useAppSelector(isLoadingSelector);
    const items = useAppSelector(itemsSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(ACTION.loading());

        fetch(RESOURCE_URL).then((response) => response.json()).then((data) => {
            dispatch(ACTION.loadingDone(data));

            console.log('done', data);
        }).catch((error) => {
            // try to load local data
            console.error('error', error);
        });
    }, []);

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
