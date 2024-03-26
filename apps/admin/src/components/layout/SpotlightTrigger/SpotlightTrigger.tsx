import React from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAppContext } from '../../../contexts';

const SpotlightTrigger = () => {
  const { setSpotlightOpen } = useAppContext();

  return (
    <IconButton onClick={() => setSpotlightOpen(true)} color="inherit">
      <SearchIcon />
    </IconButton>
  );
};

export default SpotlightTrigger;
