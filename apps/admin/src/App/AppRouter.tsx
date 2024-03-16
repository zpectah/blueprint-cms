import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BASE_ROOT, PATH_ID_SUFFIX, ROUTES } from '../config';
import { PageLayout } from '../components';
import { Error, Login, LostPassword, Dashboard, Posts } from '../modules';

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
          path: ROUTES.dashboard.path,
          element: <Dashboard />,
        },
        {
          path: `${ROUTES.posts.path}`,
          element: <Posts />,
          children: [
            {
              path: `${ROUTES.posts.path}${PATH_ID_SUFFIX}`,
              element: <Posts />,
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
