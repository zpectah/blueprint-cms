import React from 'react';
import { UsersItem } from '@blueprint/types';
import { DataList } from '../../../components';
import { useUsers } from '../../../hooks';

const UsersList = () => {
  const { users } = useUsers();

  return (
    <div>
      <DataList<UsersItem> model="users" items={users} />
    </div>
  );
};

export default UsersList;
