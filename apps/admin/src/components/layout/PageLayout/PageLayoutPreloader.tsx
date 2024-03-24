import React from 'react';
import { styled, Box, CircularProgress, Typography } from '@mui/material';
import { HEADER_MOBILE_HEIGHT, SPACING_BASE } from '../../../styles';

const PreloaderWrapper = styled(Box)({
  width: '100%',
  minHeight: '20rem',
  height: `calc(100vh - ${HEADER_MOBILE_HEIGHT})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const PreloaderContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: SPACING_BASE,
});

const PageLayoutPreloader = () => {
  return (
    <PreloaderWrapper>
      <PreloaderContent>
        <CircularProgress />
        <Typography variant="subtitle2">Preparing component, please wait</Typography>
      </PreloaderContent>
    </PreloaderWrapper>
  );
};

export default PageLayoutPreloader;
