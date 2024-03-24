import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { UsersContextProvider } from './context';
import { useUsersContextValue } from './hooks';
import { UsersList } from './UsersList';
import { UsersDetail } from './UsersDetail';

const Users = () => {
  const { t } = useTranslation(['common', 'users']);
  const providerValue = useUsersContextValue();

  return (
    <UsersContextProvider value={providerValue}>
      <ViewLayout
        title={t('users:page.title')}
        subtitle={t('users:page.subtitle')}
        meta={{
          title: t('users:page.meta.title'),
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.users.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            {t('label.users_new')}
          </Button>
        }
      >
        <UsersList />
        <UsersDetail />
      </ViewLayout>
    </UsersContextProvider>
  );
};

export default Users;
