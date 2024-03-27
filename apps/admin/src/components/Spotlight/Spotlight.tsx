import React from 'react';
import { styled, Dialog } from '@mui/material';
import { SPACING_BASE } from '../../styles';
import { useAppContext } from '../../contexts';
import SpotlightSearch from './SpotlightSearch';
import SpotlightResults from './SpotlightResults';
import { SpotlightContextProvider } from './SpotlightContext';
import { useSpotlightContextValue } from './useSpotlightContextValue';

const SpotlightWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: SPACING_BASE,
  padding: SPACING_BASE,
});

const Spotlight = () => {
  const { spotlightOpen, setSpotlightOpen } = useAppContext();
  const { query, setQuery } = useSpotlightContextValue();

  const closeHandler = () => {
    setSpotlightOpen(false);
    setQuery('');
  };

  const contextValue = {
    query,
    setQuery,
  };

  return (
    <SpotlightContextProvider value={contextValue}>
      <Dialog fullWidth closeAfterTransition open={spotlightOpen} onClose={closeHandler}>
        <SpotlightWrapper>
          <SpotlightSearch />
          <SpotlightResults />
        </SpotlightWrapper>
      </Dialog>
    </SpotlightContextProvider>
  );
};

export default Spotlight;
