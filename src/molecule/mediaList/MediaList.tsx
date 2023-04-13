import React from 'react';
import { Box, Typography } from '@mui/material';
import MediaItem from '../mediaItem/MediaItem';
import MediaItemSkeleton from '../mediaItem/MediaItemSkeleton';
import { IMediaItem } from '../../organism/mediaList/state';

interface IProps {
  items: IMediaItem[];
  isLoading: boolean;
  isErrorState: boolean;
}

const SKELETON_LIST = [...Array(12).keys()];

function MediaList({ items, isLoading, isErrorState }: IProps) {
  if (isErrorState) {
    return <Typography sx={{ my: 2 }} variant="h3" color="error">Data could not be loaded</Typography>;
  }

  return (
    <Box
      component="ul"
      sx={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '0px',
      }}
    >
      {isLoading
        ? SKELETON_LIST.map((item) => (
          <Box key={item} sx={{ m: 1, listStyle: 'none' }} component="li">
            <MediaItemSkeleton />
          </Box>
        ))
        : (
          items.map((item) => (
            <Box key={item.id} component="li" sx={{ m: 1, listStyle: 'none' }}>
              <MediaItem item={item} />
            </Box>
          ))
        )}
    </Box>
  );
}

export default React.memo(MediaList);
