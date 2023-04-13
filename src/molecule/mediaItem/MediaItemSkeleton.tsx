import React from 'react';
import { Skeleton } from '@mui/material';
import { MEDIA_WIDTH } from './MediaItem';

export default function MediaItemSkeleton() {
  return (
    <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rounded" width={MEDIA_WIDTH} height={315} />
  );
}
