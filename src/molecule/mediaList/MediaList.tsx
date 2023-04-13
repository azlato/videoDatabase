import React from 'react';
import { Box } from '@mui/material';
import Spinner from '../../atom/spinner/Spinner';
import MediaItem from '../mediaItem/MediaItem';
import { IMediaItem } from '../../organism/mediaList/state';
import './mediaList.css';

interface IProps {
  isErrorState: boolean;
  isLoading: boolean;
  items: IMediaItem[];
}

function MediaList({ isErrorState, isLoading, items }: IProps) {
  if (isErrorState) {
    return <div className="mol-media-list__error">Data could not be loaded</div>;
  }

  return (
    <div>
      {isLoading
        ? <Spinner />
        : (
          <ul className="mol-media-list">
            {items.map((item) => (
              <Box key={item.id} component="li" sx={{ m: 1 }}>
                <MediaItem item={item} />
              </Box>
            ))}
          </ul>
        )}
    </div>
  );
}

export default React.memo(MediaList);
