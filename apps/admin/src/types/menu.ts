import { MenuItemProps, ListItemTextProps } from '@mui/material';

export type MenuItem = {
  key: number;
  label: string;
  path: string;
  menuItemsProps?: Partial<MenuItemProps>;
  listItemTextProps?: Partial<ListItemTextProps>;
};

export type MenuItemList = MenuItem[];
