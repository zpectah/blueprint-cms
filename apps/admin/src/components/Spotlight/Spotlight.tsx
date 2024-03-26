import React from 'react';
import { styled, IconButton, Dialog, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SPACING_BASE } from '../../styles';
import { useAppContext } from '../../contexts';

const SpotlightContent = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: SPACING_BASE,
  padding: SPACING_BASE,
});
const SpotlightSearch = styled('div')({
  width: '100%',
  padding: SPACING_BASE,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});
const SpotlightResults = styled('div')({
  width: '100%',
  paddingTop: SPACING_BASE,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

const Spotlight = () => {
  const { spotlightOpen, setSpotlightOpen } = useAppContext();

  return (
    <>
      <Dialog fullWidth closeAfterTransition open={spotlightOpen} onClose={() => setSpotlightOpen(false)}>
        <SpotlightContent>
          <SpotlightSearch>
            <TextField type="search" fullWidth placeholder="Type to search ..." />
          </SpotlightSearch>
          <SpotlightResults>results</SpotlightResults>
        </SpotlightContent>
      </Dialog>
    </>
  );
};

export default Spotlight;
