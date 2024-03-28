import useSWR, { SWRConfiguration } from 'swr';
import { MembersList } from '@blueprint/types';
import { API_MODEL } from '../../../config';

const fetcher = () => fetch(API_MODEL.members).then((res) => res.json());

export const useMembers = (config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<MembersList>({}, fetcher, config);

  return {
    members: data ?? [],
    membersLoading: isLoading,
    membersError: error,
    ...rest,
  };
};
