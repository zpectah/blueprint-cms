import React, { useState } from 'react';
import { styled, Dialog } from '@mui/material';
import { SPACING_BASE } from '../../styles';
import { useAppContext } from '../../contexts';
import SpotlightSearch from './SpotlightSearch';
import SpotlightResults from './SpotlightResults';

const SpotlightWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: SPACING_BASE,
  padding: SPACING_BASE,
});

const Spotlight = () => {
  const { spotlightOpen, setSpotlightOpen } = useAppContext();

  const [query, setQuery] = useState('');

  return (
    <Dialog fullWidth closeAfterTransition open={spotlightOpen} onClose={() => setSpotlightOpen(false)}>
      <SpotlightWrapper>
        <SpotlightSearch open={spotlightOpen} value={query} onChange={(event) => setQuery(event.target.value)} />
        <SpotlightResults query={query} />
      </SpotlightWrapper>
    </Dialog>
  );
};

export default Spotlight;
