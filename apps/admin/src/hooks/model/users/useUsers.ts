import useSWR, { SWRConfiguration } from 'swr';
import { UsersList } from '@blueprint/types';
import { API_MODEL } from '../../../config';

const fetcher = () => fetch(API_MODEL.users).then((res) => res.json());

export const useUsers = (config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<UsersList>({}, fetcher, config);

  return {
    users: data ?? [],
    usersLoading: isLoading,
    usersError: error,
    ...rest,
  };
};
