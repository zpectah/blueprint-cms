import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BASE_ROOT, ROUTES } from '../config';
import { PageLayout } from '../components';
import { Error, Login, Dashboard } from '../modules';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: BASE_ROOT,
      element: <PageLayout />,
      children: [
        {
          path: ROUTES.login.path,
          element: <Login />,
        },
        {
          path: ROUTES.dashboard.path,
          element: <Dashboard />,
        },
        {
          path: ROUTES.error.path,
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
