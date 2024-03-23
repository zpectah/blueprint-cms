import React from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { BASE_ROOT, PATH_ID_SUFFIX, PATH_PANEL_SUFFIX, ROUTES } from '../config';
import { PageLayout } from '../components';
import {
  Error,
  Playground,
  Login,
  LostPassword,
  Dashboard,
  Posts,
  Profile,
  Settings,
  Users,
  Help,
  Files,
} from '../modules';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.playground.path,
      element: <Playground />,
    },
    {
      path: ROUTES.login.path,
      element: <Login />,
    },
    {
      path: ROUTES.lostPassword.path,
      element: <LostPassword />,
    },
    {
      path: BASE_ROOT,
      element: <PageLayout />,
      children: [
        {
          // Redirect for empty path
          path: BASE_ROOT,
          element: <Navigate to={ROUTES.dashboard.path} replace />,
        },
        {
          path: ROUTES.dashboard.path,
          element: <Dashboard />,
        },
        {
          path: ROUTES.settings.path,
          element: <Settings />,
          children: [
            {
              path: `${ROUTES.settings.path}${PATH_PANEL_SUFFIX}`,
              element: <Settings />,
            },
          ],
        },
        {
          path: ROUTES.help.path,
          element: <Help />,
        },
        {
          path: ROUTES.profile.path,
          element: <Profile />,
        },
        {
          path: ROUTES.posts.path,
          element: <Posts />,
          children: [
            {
              path: `${ROUTES.posts.path}${PATH_ID_SUFFIX}`,
              element: <Posts />,
            },
          ],
        },
        {
          path: ROUTES.users.path,
          element: <Users />,
          children: [
            {
              path: `${ROUTES.users.path}${PATH_ID_SUFFIX}`,
              element: <Users />,
            },
          ],
        },
        {
          path: ROUTES.files.path,
          element: <Files />,
          children: [
            {
              path: `${ROUTES.files.path}${PATH_ID_SUFFIX}`,
              element: <Files />,
            },
          ],
        },
      ],
    },
    {
      path: ROUTES.error.path,
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
