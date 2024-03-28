import React from 'react';
import { styled, Dialog } from '@mui/material';
import { SPACING_BASE } from '../../styles';
import SpotlightSearch from './SpotlightSearch';
import SpotlightResults from './SpotlightResults';
import { useSpotlightContext } from './SpotlightContext';

const SpotlightWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: SPACING_BASE,
  // padding: SPACING_BASE,
});

const Spotlight = () => {
  const { open, setClose } = useSpotlightContext();

  return (
    <Dialog fullWidth closeAfterTransition open={open} onClose={setClose}>
      <SpotlightWrapper>
        <SpotlightSearch />
        <SpotlightResults />
      </SpotlightWrapper>
    </Dialog>
  );
};

export default Spotlight;
