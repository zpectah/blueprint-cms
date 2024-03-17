import React from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { BASE_ROOT, PATH_ID_SUFFIX, ROUTES } from '../config';
import { PageLayout } from '../components';
import { Error, Login, LostPassword, Dashboard, Posts, Settings, Users } from '../modules';

const AppRouter = () => {
  const router = createBrowserRouter([
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
