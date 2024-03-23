import { MenuItemProps, ListItemTextProps } from '@mui/material';
import { ComponentType } from 'react';

export type MenuItem = {
  key: number;
  label: string;
  path: string;
  menuItemsProps?: Partial<MenuItemProps>;
  listItemTextProps?: Partial<ListItemTextProps>;
  icon?: ComponentType;
};

export type MenuItemList = MenuItem[];
