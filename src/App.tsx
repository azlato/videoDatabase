import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './organism/header/Header';
import MediaList from './organism/mediaList/MediaList';

function App() {
  return (
    <Box>
      <Header />
      <Container maxWidth="xl" sx={{ p: 3 }}>
        <MediaList />
      </Container>
    </Box>
  );
}

export default App;
