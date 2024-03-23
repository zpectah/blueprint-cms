import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuList, MenuItem, ListItemText, ListItemIcon } from '@mui/material';
import { PRIMARY_MENU } from '../../../constants';
import { useBreakpoint } from '../../../hooks';

export interface PrimaryMenuProps {
  onMobileMenuItemClick?: (event: MouseEvent, key: number) => void;
  onDesktopMenuItemClick?: (event: MouseEvent, key: number) => void;
}

const PrimaryMenu = ({ onMobileMenuItemClick, onDesktopMenuItemClick }: PrimaryMenuProps) => {
  const { pathname } = useLocation();
  const { isMobile } = useBreakpoint();

  const menuItemClickHandler = (event: MouseEvent, key: number) => {
    if (isMobile) {
      if (onMobileMenuItemClick) onMobileMenuItemClick(event, key);
    } else {
      if (onDesktopMenuItemClick) onDesktopMenuItemClick(event, key);
    }
  };

  return (
    <MenuList sx={{ paddingY: 0 }}>
      {PRIMARY_MENU.map(({ key, label, path, menuItemsProps, listItemTextProps, icon: Icon }) => (
        <MenuItem
          key={key}
          component={Link}
          to={path}
          selected={pathname.includes(path)}
          onClick={(e: MouseEvent) => menuItemClickHandler(e, key)}
          divider
          {...menuItemsProps}
        >
          {Icon && (
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
          )}
          <ListItemText {...listItemTextProps}>{label}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default PrimaryMenu;
