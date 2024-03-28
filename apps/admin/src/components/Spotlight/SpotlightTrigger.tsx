import React from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSpotlightContext } from './SpotlightContext';

const SpotlightTrigger = () => {
  const { setOpen } = useSpotlightContext();

  return (
    <IconButton onClick={() => setOpen(true)} color="inherit">
      <SearchIcon />
    </IconButton>
  );
};

export default SpotlightTrigger;
