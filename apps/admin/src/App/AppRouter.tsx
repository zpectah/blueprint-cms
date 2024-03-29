import React, { lazy } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { BASE_ROOT, PATH_ID_SUFFIX, PATH_PANEL_SUFFIX, ROUTES } from '../config';
import { PageLayout, PageLayoutPreloader, RouterErrorBoundary } from '../components';
import { Playground, Error, Login, LostPassword } from '../modules';
const Dashboard = lazy(() => import('../modules/Dashboard/Dashboard'));
const Posts = lazy(() => import('../modules/Posts/Posts'));
const Profile = lazy(() => import('../modules/Profile/Profile'));
const Settings = lazy(() => import('../modules/Settings/Settings'));
const Users = lazy(() => import('../modules/Users/Users'));
const Help = lazy(() => import('../modules/Help/Help'));
const Files = lazy(() => import('../modules/Files/Files'));
const Categories = lazy(() => import('../modules/Categories/Categories'));
const Menus = lazy(() => import('../modules/Menus/Menus'));
const Messages = lazy(() => import('../modules/Messages/Messages'));
const Pages = lazy(() => import('../modules/Pages/Pages'));
const Tags = lazy(() => import('../modules/Tags/Tags'));
const Translations = lazy(() => import('../modules/Translations/Translations'));
const Members = lazy(() => import('../modules/Members/Members'));

const AppRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: ROUTES.error.path,
        element: <Error />,
        errorElement: <RouterErrorBoundary />,
      },
      {
        path: ROUTES.playground.path,
        element: <Playground />,
        errorElement: <RouterErrorBoundary />,
      },
      {
        path: ROUTES.login.path,
        element: <Login />,
        errorElement: <RouterErrorBoundary />,
      },
      {
        path: ROUTES.lostPassword.path,
        element: <LostPassword />,
        errorElement: <RouterErrorBoundary />,
      },
      {
        path: BASE_ROOT,
        element: <PageLayout />,
        errorElement: <RouterErrorBoundary authorized />,
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
          {
            path: ROUTES.categories.path,
            element: <Categories />,
            children: [
              {
                path: `${ROUTES.categories.path}${PATH_ID_SUFFIX}`,
                element: <Categories />,
              },
            ],
          },
          {
            path: ROUTES.menus.path,
            element: <Menus />,
            children: [
              {
                path: `${ROUTES.menus.path}${PATH_ID_SUFFIX}`,
                element: <Menus />,
              },
            ],
          },
          {
            path: ROUTES.messages.path,
            element: <Messages />,
            children: [
              {
                path: `${ROUTES.messages.path}${PATH_ID_SUFFIX}`,
                element: <Messages />,
              },
            ],
          },
          {
            path: ROUTES.pages.path,
            element: <Pages />,
            children: [
              {
                path: `${ROUTES.pages.path}${PATH_ID_SUFFIX}`,
                element: <Pages />,
              },
            ],
          },
          {
            path: ROUTES.tags.path,
            element: <Tags />,
            children: [
              {
                path: `${ROUTES.tags.path}${PATH_ID_SUFFIX}`,
                element: <Tags />,
              },
            ],
          },
          {
            path: ROUTES.translations.path,
            element: <Translations />,
            children: [
              {
                path: `${ROUTES.translations.path}${PATH_ID_SUFFIX}`,
                element: <Translations />,
              },
            ],
          },
          {
            path: ROUTES.members.path,
            element: <Members />,
            children: [
              {
                path: `${ROUTES.members.path}${PATH_ID_SUFFIX}`,
                element: <Members />,
              },
            ],
          },
        ],
      },
    ],
    { basename: '' }
  );

  return <RouterProvider fallbackElement={<PageLayoutPreloader router />} router={router} />;
};

export default AppRouter;
