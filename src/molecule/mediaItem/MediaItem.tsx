import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player-react/dist/controls.css';
import { IMediaItem } from '../../organism/mediaList/state';
import './mediaItem.css';

interface IProps {
  item: IMediaItem;
}

function MediaItem({ item }: IProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<{ player: any; videoElement: HTMLVideoElement }>(null);

  async function loadAsset(url: string, player: any, videoElement: HTMLVideoElement) {
    await player.load(url);
    videoElement.play();
  }

  const onClickCallback = () => {
    if (!videoRef.current) {
      return;
    }

    const {
      player,
      videoElement,
    } = videoRef.current;

    if (isPlaying) {
      setIsPlaying(false);
      videoElement.pause();
    } else {
      setIsPlaying(true);
      loadAsset(item.manifestUri, player, videoElement);
    }
  };

  return (
    <button
      type="button"
      className={classnames({
        'mol-media-item': true,
        'mol-media-item--drm-protection': item.hasDrm,
        'mol-media-item--playable': !isPlaying && !item.hasDrm,
      })}
      onClick={item.hasDrm ? undefined : onClickCallback}
    >
      <div className="mol-media-item__media">
        <img
          className={!isPlaying ? 'mol-media-item__image' : 'mol-media-item__image mol-media-item__image--hidden'}
          src={item.iconUri}
          alt=""
        />
        <ShakaPlayer
          className={isPlaying ? 'mol-media-item__video' : 'mol-media-item__video mol-media-item__video--hidden'}
          ref={videoRef}
        />
        ;
      </div>
      <h2 className="mol-media-item__name">{item.name}</h2>
    </button>
  );
}

export default React.memo(MediaItem);
