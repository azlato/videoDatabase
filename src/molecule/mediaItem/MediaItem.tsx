import {IMediaItem} from '../../organism/mediaList/state';
import './mediaItem.css';

interface IProps {
    item: IMediaItem;
}

function MediaItem({item}: IProps) {
    return (
        <div className="mol-media-item">
            <img className="mol-media-item__image" src={item.iconUri} alt="" />
            <h2 className="mol-media-item__name">{item.name}</h2>
        </div>
    );
}

export default MediaItem;