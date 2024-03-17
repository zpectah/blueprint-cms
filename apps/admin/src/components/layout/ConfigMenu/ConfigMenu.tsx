import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, MenuItemProps } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppContext } from '../../../contexts';
import { themeModeKeys } from '../../../enums';

const ConfigMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { mode, setMode } = useAppContext();

  const open = Boolean(anchorEl);
  const idPrefix = 'configMenu';

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeHandler = () => {
    setAnchorEl(null);
  };
  const toggleThemeMode = () => {
    const newMode = mode === themeModeKeys.light ? themeModeKeys.dark : themeModeKeys.light;

    setMode(newMode);
    closeHandler();
  };

  const menuItems: Partial<MenuItemProps>[] = [
    {
      key: 1,
      children: 'Toggle language',
      onClick: closeHandler,
    },
    {
      key: 2,
      children: `Toggle theme ${mode}`,
      onClick: toggleThemeMode,
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
        <SettingsIcon />
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

export default ConfigMenu;
