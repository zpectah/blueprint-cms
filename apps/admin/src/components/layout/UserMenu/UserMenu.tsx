import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, MenuItemProps } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const idPrefix = 'UserMenu';

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeHandler = () => {
    setAnchorEl(null);
  };

  const menuItems: Partial<MenuItemProps>[] = [
    {
      key: 1,
      children: 'Profile',
      onClick: closeHandler,
    },
    {
      key: 2,
      children: 'Logout',
      onClick: closeHandler,
    },
  ];

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
        {menuItems.map((item) => (
          <MenuItem {...item} />
        ))}
      </Menu>
    </>
  );
};

export default UserMenu;
