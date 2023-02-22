import ShakaPlayer from 'shaka-player-react';
import 'shaka-player-react/dist/controls.css';
import {useState, useRef} from 'react';
import {IMediaItem} from '../../organism/mediaList/state';
import './mediaItem.css';

interface IProps {
    item: IMediaItem;
}

function MediaItem({item}: IProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<{player: any; videoElement: HTMLVideoElement}>(null);

    const onClickCallback = () => {
        if (!videoRef.current) {
            return;
        }

        const {
            player,
            videoElement
        } = videoRef.current;

        if (isPlaying) {
            setIsPlaying(false);
            videoElement.pause();
        } else {
            setIsPlaying(true);
            loadAsset(item.manifestUri, player, videoElement);
        }
    };

    async function loadAsset(url: string, player: any, videoElement: HTMLVideoElement) {
        await player.load(url);
        videoElement.play();
    }

    return (
        <button className={item.hasDrm ? "mol-media-item mol-media-item--drm-protection" : "mol-media-item"} onClick={item.hasDrm ? undefined : onClickCallback}>
            <div className="mol-media-item__media">
                <img className={!isPlaying ? 'mol-media-item__image' : 'mol-media-item__image mol-media-item__image--hidden'} src={item.iconUri} alt="" />
                <ShakaPlayer className={isPlaying ? 'mol-media-item__video' : 'mol-media-item__video mol-media-item__video--hidden'} ref={videoRef} />;
            </div>
            <h2 className="mol-media-item__name">{item.name}</h2>
        </button>
    );
}

export default MediaItem;