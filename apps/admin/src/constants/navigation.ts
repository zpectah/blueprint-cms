import { ROUTES } from '../config';
import { MenuItemList } from '../types';

export const PRIMARY_MENU: MenuItemList = [
  {
    key: 1,
    label: 'Dashboard', // TODO #translation-key
    path: ROUTES.dashboard.path,
  },
  {
    key: 2,
    label: 'Posts', // TODO #translation-key
    path: ROUTES.posts.path,
  },
  {
    key: 3,
    label: 'Users', // TODO #translation-key
    path: ROUTES.users.path,
  },
  {
    key: 4,
    label: 'Settings', // TODO #translation-key
    path: ROUTES.settings.path,
  },
];
