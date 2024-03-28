import useSWR, { SWRConfiguration } from 'swr';
import { MembersItem } from '@blueprint/types';
import { API_MODEL } from '../../../config';

const fetcher = (id: string) => fetch(`${API_MODEL.membersDetail}${id}`).then((res) => res.json());

export const useMembersDetail = (id?: string, config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<MembersItem>(id !== 'new' && id, fetcher, config);

  return {
    detail: data,
    detailLoading: isLoading,
    detailError: error,
    ...rest,
  };
};
