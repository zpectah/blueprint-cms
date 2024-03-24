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
    label: 'Settings', // TODO #translation-key
    path: ROUTES.settings.path,
    icon: SettingsIcon,
  },
  {
    key: 3,
    label: 'Users', // TODO #translation-key
    path: ROUTES.users.path,
    icon: GroupIcon,
  },
  {
    key: 4,
    label: 'Posts', // TODO #translation-key
    path: ROUTES.posts.path,
    icon: ArticleIcon,
  },
  {
    key: 5,
    label: 'Categories', // TODO #translation-key
    path: ROUTES.categories.path,
    icon: CategoryIcon,
  },
  {
    key: 6,
    label: 'Tags', // TODO #translation-key
    path: ROUTES.tags.path,
    icon: BookmarkIcon,
  },
  {
    key: 7,
    label: 'Pages', // TODO #translation-key
    path: ROUTES.pages.path,
    icon: AutoStoriesIcon,
  },
  {
    key: 8,
    label: 'Translations', // TODO #translation-key
    path: ROUTES.translations.path,
    icon: LanguageIcon,
  },
  {
    key: 9,
    label: 'Files', // TODO #translation-key
    path: ROUTES.files.path,
    icon: AttachFileIcon,
  },
  {
    key: 10,
    label: 'Menus', // TODO #translation-key
    path: ROUTES.menus.path,
    icon: MenuIcon,
  },
  {
    key: 11,
    label: 'Messages', // TODO #translation-key
    path: ROUTES.messages.path,
    icon: MessageIcon,
  },
];
