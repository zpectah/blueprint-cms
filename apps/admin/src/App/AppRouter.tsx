import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BASE_ROOT, ROUTES } from '../config';
import { PageLayout } from '../components';
import { Error, Login, LostPassword, Dashboard } from '../modules';

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
