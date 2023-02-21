import { itemsSelector } from './selector';
import { useAppSelector } from '../../store/hooks';

function MediaList() {
    const items = useAppSelector(itemsSelector);

    return <div>
        <h1>Media list</h1>
        <ul>
            {items.map((item: any) => (<li key={item.name}>{item.name}</li>))}
        </ul>
    </div>
}

export default MediaList;
