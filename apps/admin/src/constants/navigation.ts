import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { ROUTES } from '../config';
import { MenuItemList } from '../types';

export const PRIMARY_MENU: MenuItemList = [
  {
    key: 1,
    label: 'Dashboard', // TODO #translation-key
    path: ROUTES.dashboard.path,
    icon: HomeIcon,
  },
  {
    key: 2,
    label: 'Posts', // TODO #translation-key
    path: ROUTES.posts.path,
    icon: ArticleIcon,
  },
  {
    key: 3,
    label: 'Files', // TODO #translation-key
    path: ROUTES.files.path,
    icon: AttachFileIcon,
  },
  {
    key: 4,
    label: 'Users', // TODO #translation-key
    path: ROUTES.users.path,
    icon: GroupIcon,
  },
  {
    key: 5,
    label: 'Settings', // TODO #translation-key
    path: ROUTES.settings.path,
    icon: SettingsIcon,
  },
];
