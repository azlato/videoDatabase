import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './organism/header/Header';
import MediaList from './organism/mediaList/MediaList';
import useThemeSettings from './hooks/useThemeSettings';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

function App() {
  const [theme, themeSetings, setTheme, isMounted] = useThemeSettings();
  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider
      theme={theme === 'light' ? lightTheme : darkTheme}
    >
      <CssBaseline />
      <Header theme={themeSetings} setTheme={setTheme} />
      <Container maxWidth="xl" sx={{ p: 3 }}>
        <MediaList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
