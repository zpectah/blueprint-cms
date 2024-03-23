import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { ViewLayout } from '../../components';
import UsersList from './UsersList';
import UsersDetail from './UsersDetail';

const Users = () => {
  return (
    <ViewLayout
      title="Users"
      meta={{
        title: 'Users',
      }}
      actions={
        <Button component={Link} to={`${ROUTES.users.path}/new`} variant="contained" color="primary" disableElevation>
          New user
        </Button>
      }
    >
      <UsersList />
      <UsersDetail />
    </ViewLayout>
  );
};

export default Users;
