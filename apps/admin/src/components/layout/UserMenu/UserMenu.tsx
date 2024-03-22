import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem, MenuItemProps } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ROUTES } from '../../../config';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();
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
      onClick: () => {
        closeHandler();
        navigate(ROUTES.profile.path);
      },
    },
    {
      key: 2,
      children: 'Logout',
      onClick: () => {
        closeHandler();
        // TODO #logout-process
        navigate(ROUTES.login.path);
      },
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
        color="inherit"
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
          sx: {
            paddingY: 0,
          },
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
