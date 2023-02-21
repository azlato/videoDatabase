import Spinner from '../../atom/Spinner';
import MediaItem from '../../molecule/mediaItem/MediaItem';
import {IMediaItem} from '../../organism/mediaList/state';
import './mediaList.css';

interface IProps {
    isErrorState: boolean;
    isLoading: boolean;
    items: IMediaItem[];
}

function MediaList({isErrorState, isLoading, items}: IProps) {
    if (isErrorState) {
        return <div className='mol-media-list__error'>Data could not be loaded</div>;
    }

    return <div>
        {isLoading ?
            <Spinner/>
        :
            <ul className='mol-media-list'>
                {items.map((item: any) => (<li key={item.name}><MediaItem item={item}/></li>))}
            </ul>
        }
    </div>
}

export default MediaList;