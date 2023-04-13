import React from 'react';
import { Box } from '@mui/material';

const styles = {
  root: { position: 'relative' },
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    '& > *': { height: '100%', width: '100%' },
  },
};

interface IProps {
  ratio: number;
  width: number;
  children: React.ReactElement;
}

function AspectRatioBox({ children, width, ratio = 1 }: IProps) {
  return (
    <Box sx={{ ...styles.root, width }}>
      <Box sx={{ ...styles.wrapper }}>{children}</Box>
      <div style={{ paddingBottom: `${(1 / ratio) * 100}%` }} />
    </Box>
  );
}

export default AspectRatioBox;
