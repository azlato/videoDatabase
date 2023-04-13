import React, { useState, useRef, useCallback } from 'react';
import {
  CardActionArea, Card, Typography, CardContent, Chip,
} from '@mui/material';
import { IPlayer, IPlayerRef } from 'shaka-player-react';
import { IMediaItem } from '../../organism/mediaList/state';
import AspectRatioBox from '../../atom/aspectRatioBox/AspectRatioBox';
import Video from '../../atom/video/Video';

interface IProps {
  item: IMediaItem;
}

export const MEDIA_WIDTH = 320;

function MediaItem({ item }: IProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<IPlayerRef>(null);

  const onClickCallback = useCallback(() => {
    async function loadAsset(url: string, player: IPlayer, videoElement: HTMLVideoElement) {
      await player.load(url);
      videoElement.play();
    }

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
  }, [isPlaying, item]);

  return (
    <Card sx={{ maxWidth: MEDIA_WIDTH }}>
      <CardActionArea
        onClick={item.hasDrm ? undefined : onClickCallback}
      >
        <AspectRatioBox width={MEDIA_WIDTH} ratio={16 / 9}>
          <Video image={item.iconUri} videoRef={videoRef} isPlaying={isPlaying} />
        </AspectRatioBox>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {item.name}
          </Typography>
          {item.hasDrm
            && <Chip label="DRM" color="error" variant="outlined" />}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default React.memo(MediaItem);
