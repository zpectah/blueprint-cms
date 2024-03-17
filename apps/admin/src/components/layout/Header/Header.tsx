import React from 'react';
import { styled, Box, Toolbar, Container, Typography } from '@mui/material';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from '../../../styles';

const HeaderBase = styled(Box)({
  width: '100%',

  // TODO
  backgroundColor: 'rgba(25,25,25,.5)',
});

const Header = () => {
  return (
    <HeaderBase
      component="header"
      sx={{
        height: {
          xs: HEADER_MOBILE_HEIGHT,
          md: HEADER_DESKTOP_HEIGHT,
        },
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Typography>Logo</Typography>
        </Toolbar>
      </Container>
    </HeaderBase>
  );
};

export default Header;
