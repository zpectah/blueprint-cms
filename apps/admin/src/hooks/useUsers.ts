import { UsersItem, UsersList } from '@blueprint/types';

export const useUsers = () => {
  const users: UsersList = [];

  const getDetail = (id: string | undefined): UsersItem | undefined => {
    if (!id) return undefined;

    return {
      id: id,
    };
  };

  return {
    users,
    getDetail,
  };
};
