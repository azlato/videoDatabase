import {useState, useRef} from 'react';
import {IMediaItem} from '../../organism/mediaList/state';
import './mediaItem.css';

interface IProps {
    item: IMediaItem;
}

interface IDashJsPlayer {
    initialize(element?: HTMLElement, source?: string, autoplay?: boolean, startTime?: number): void;
    destroy: () => void;
}

declare global {
    interface Window { dashjs: { MediaPlayer: () => {create: () => IDashJsPlayer} } }
}

function MediaItem({item}: IProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playerInstance, setPlayerInstance] = useState<null | IDashJsPlayer>(null);
    const videoRef = useRef(null);

    const onClickCallback = () => {
        if (!window.dashjs || !videoRef.current) {
            return;
        }

        if (isPlaying) {
            setIsPlaying(false);

            if (playerInstance) {
                playerInstance.destroy();
            }
        } else {
            setIsPlaying(true);
            const player = window.dashjs.MediaPlayer().create();
            player.initialize(videoRef.current, item.manifestUri, true);
            setPlayerInstance(player);
        }
    };



    return (
        <button className={item.hasDrm ? "mol-media-item mol-media-item--drm-protection" : "mol-media-item"} onClick={item.hasDrm ? undefined : onClickCallback}>
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