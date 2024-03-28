import React from 'react';
import { MembersItem } from '@blueprint/types';
import { DataList } from '../../../components';
import { useMembers } from '../../../hooks';

const UsersList = () => {
  const { members } = useMembers();

  return (
    <div>
      <DataList<MembersItem> model="members" items={members} />
    </div>
  );
};

export default UsersList;
