import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Spotlight = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const openHandler = () => {
    setDialogOpen(true);
  };
  const closeHandler = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <IconButton onClick={openHandler}>
        <SearchIcon />
      </IconButton>
      <Dialog open={dialogOpen} onClose={closeHandler}>
        <DialogTitle>Spotlight</DialogTitle>
        <DialogContent>Content</DialogContent>
        <DialogActions>Dialog actions</DialogActions>
      </Dialog>
    </>
  );
};

export default Spotlight;
