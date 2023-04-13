import React from 'react';
import { Skeleton } from '@mui/material';
import { MEDIA_WIDTH_XS, MEDIA_WIDTH_DEFAULT } from './MediaItem';

export default function MediaItemSkeleton() {
  return (
    <Skeleton
      sx={{ bgcolor: 'grey.900', maxWidth: { xs: MEDIA_WIDTH_XS, sm: MEDIA_WIDTH_DEFAULT } }}
      variant="rounded"
      width={MEDIA_WIDTH_DEFAULT}
      height={315}
    />
  );
}
