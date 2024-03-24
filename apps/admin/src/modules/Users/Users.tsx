import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { UsersContextProvider } from './context';
import { useUsersContextValue } from './hooks';
import { UsersList } from './UsersList';
import { UsersDetail } from './UsersDetail';

const Users = () => {
  const { ...providerValue } = useUsersContextValue();

  return (
    <UsersContextProvider value={providerValue}>
      <ViewLayout
        title="Users"
        meta={{
          title: 'Users',
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.users.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            New user
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
