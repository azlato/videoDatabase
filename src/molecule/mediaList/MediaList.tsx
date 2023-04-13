import React from 'react';
import { Box } from '@mui/material';
import MediaItem from '../mediaItem/MediaItem';
import MediaItemSkeleton from '../mediaItem/MediaItemSkeleton';
import { IMediaItem } from '../../organism/mediaList/state';

interface IProps {
  isErrorState: boolean;
  isLoading: boolean;
  items: IMediaItem[];
}

const SKELETON_LIST = [...Array(12).keys()];

function MediaList({ isErrorState, items, isLoading }: IProps) {
  if (isErrorState) {
    return <div className="mol-media-list__error">Data could not be loaded</div>;
  }

  // const isLoading = true;

  return (
    <Box component="ul" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
