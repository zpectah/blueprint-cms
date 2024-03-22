export const BASE_ROOT = '/';

export const PATH_ID_SUFFIX = '/:id';
export const PATH_PANEL_SUFFIX = '/:panel';

export const ROUTES = {
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
  posts: {
    path: '/posts',
  },
  profile: {
    path: '/profile',
  },
  settings: {
    path: '/settings',
    panels: {
      global: 'global',
      client: 'client',
      admin: 'admin',
      system: 'system',
    },
  },
  users: {
    path: '/users',
  },
};
