import { AppRoutes } from '../types';

export const BASE_ROOT = '/';

export const PATH_ID_SUFFIX = '/:id';
export const PATH_PANEL_SUFFIX = '/:panel';

export const ROUTES: AppRoutes = {
  error: {
    path: '*',
  },
  playground: {
    path: '/playground',
  },
  login: {
    path: '/login',
  },
  lostPassword: {
    path: '/lost-password',
  },
  dashboard: {
    path: '/dashboard',
  },
  profile: {
    path: '/profile',
  },
  help: {
    path: '/help',
  },
  settings: {
    path: '/settings',
    panels: {
      global: 'global',
      client: 'client',
      locales: 'locales',
      admin: 'admin',
      system: 'system',
    },
  },
  users: {
    path: '/users',
  },
  posts: {
    path: '/posts',
  },
  files: {
    path: '/files',
  },
  categories: {
    path: '/categories',
  },
  menus: {
    path: '/menus',
  },
  messages: {
    path: '/messages',
  },
  pages: {
    path: '/pages',
  },
  tags: {
    path: '/tags',
  },
  translations: {
    path: '/translations',
  },
  members: {
    path: '/members',
  },
};
