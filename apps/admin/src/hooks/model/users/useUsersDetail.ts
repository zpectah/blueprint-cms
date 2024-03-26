import useSWR, { SWRConfiguration } from 'swr';
import { UsersItem } from '@blueprint/types';
import { API_MODEL } from '../../../config';

const fetcher = (id: string) => fetch(`${API_MODEL.usersDetail}${id}`).then((res) => res.json());

export const useUsersDetail = (id?: string, config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<UsersItem>(id !== 'new' && id, fetcher, config);

  return {
    detail: data,
    detailLoading: isLoading,
    detailError: error,
    ...rest,
  };
};
