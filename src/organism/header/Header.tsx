import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeSwitch from '../../atom/themeSwitch/ThemeSwitch';

interface IProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function Header({ theme, setTheme }: IProps) {
  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Video database
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <ThemeSwitch theme={theme} onSetTheme={setTheme} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
