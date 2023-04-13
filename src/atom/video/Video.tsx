import React from 'react';
import ShakaPlayer from 'shaka-player-react';
import {
  Box, CardMedia,
} from '@mui/material';
import { IPlayerRef } from '../../shaka-player-react';
import 'shaka-player-react/dist/controls.css';

interface IProps {
  isPlaying: boolean;
  image: string;
  videoRef: React.Ref<IPlayerRef>;
}

export default function Video({ image, isPlaying, videoRef }: IProps) {
  return (
    <>
      <Box sx={{ display: isPlaying ? '' : 'none', background: 'black', '& > *': { height: '100%', width: '100%' } }}>
        <ShakaPlayer
          ref={videoRef}
        />
      </Box>
      <Box sx={{ display: isPlaying ? 'none' : '' }}>
        <CardMedia
          component="img"
          image={image}
          alt=""
          sx={{ height: '100%' }}
        />
      </Box>
    </>
  );
}
