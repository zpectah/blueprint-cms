import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CategoryIcon from '@mui/icons-material/Category';
import MenuIcon from '@mui/icons-material/Menu';
import MessageIcon from '@mui/icons-material/Message';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LanguageIcon from '@mui/icons-material/Language';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { ROUTES } from '../config';
import { MenuItemList } from '../types';

export const PRIMARY_MENU: MenuItemList = [
  {
    key: 1,
    label: 'navigation.primary.dashboard',
    path: ROUTES.dashboard.path,
    icon: HomeIcon,
  },
  {
    key: 2,
    label: 'navigation.primary.settings',
    path: ROUTES.settings.path,
    icon: SettingsIcon,
  },
  {
    key: 3,
    label: 'navigation.primary.users',
    path: ROUTES.users.path,
    icon: GroupIcon,
  },
  {
    key: 4,
    label: 'navigation.primary.posts',
    path: ROUTES.posts.path,
    icon: ArticleIcon,
  },
  {
    key: 5,
    label: 'navigation.primary.categories',
    path: ROUTES.categories.path,
    icon: CategoryIcon,
  },
  {
    key: 6,
    label: 'navigation.primary.tags',
    path: ROUTES.tags.path,
    icon: BookmarkIcon,
  },
  {
    key: 7,
    label: 'navigation.primary.pages',
    path: ROUTES.pages.path,
    icon: AutoStoriesIcon,
  },
  {
    key: 8,
    label: 'navigation.primary.translations',
    path: ROUTES.translations.path,
    icon: LanguageIcon,
  },
  {
    key: 9,
    label: 'navigation.primary.files',
    path: ROUTES.files.path,
    icon: AttachFileIcon,
  },
  {
    key: 10,
    label: 'navigation.primary.menus',
    path: ROUTES.menus.path,
    icon: MenuIcon,
  },
  {
    key: 11,
    label: 'navigation.primary.members',
    path: ROUTES.members.path,
    icon: PeopleOutlineIcon,
  },
  {
    key: 12,
    label: 'navigation.primary.messages',
    path: ROUTES.messages.path,
    icon: MessageIcon,
  },
];
