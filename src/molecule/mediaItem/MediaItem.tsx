import {useState, useRef} from 'react';
import {IMediaItem} from '../../organism/mediaList/state';
import './mediaItem.css';

interface IProps {
    item: IMediaItem;
}

declare global {
    interface Window { dashjs: any; }
}

function MediaItem({item}: IProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const onClickCallback = () => {
        if (isPlaying) {
            return;
        }

        setIsPlaying(true);

        if (window.dashjs && videoRef.current) {
            const player = window.dashjs.MediaPlayer().create();
            player.initialize(videoRef.current, item.manifestUri, true);
        }
    };

    return (
        <button className="mol-media-item" onClick={onClickCallback}>
            <div className="mol-media-item__media">
                <img className={!isPlaying ? 'mol-media-item__image' : 'mol-media-item__image mol-media-item__image--hidden'} src={item.iconUri} alt="" />
                <video ref={videoRef} controls className={isPlaying ? 'mol-media-item__video' : 'mol-media-item__video mol-media-item__video--hidden'}>
                </video>
            </div>
            <h2 className="mol-media-item__name">{item.name}</h2>
        </button>
    );
}

export default MediaItem;