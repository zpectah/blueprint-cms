import React from 'react';
import { DataList } from '../../components';
import { useUsers } from '../../hooks';

const UsersList = () => {
  const { users } = useUsers();

  return (
    <div>
      <DataList items={users} />
    </div>
  );
};

export default UsersList;
