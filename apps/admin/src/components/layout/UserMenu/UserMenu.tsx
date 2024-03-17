import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const idPrefix = 'userMenu';

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeHandler = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id={`${idPrefix}_button`}
        aria-controls={open ? `${idPrefix}_menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={clickHandler}
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id={`${idPrefix}_menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={closeHandler}
        MenuListProps={{
          'aria-labelledby': `${idPrefix}_button`,
        }}
      >
        <MenuItem onClick={closeHandler}>Profile</MenuItem>
        <MenuItem onClick={closeHandler}>My account</MenuItem>
        <MenuItem onClick={closeHandler}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
