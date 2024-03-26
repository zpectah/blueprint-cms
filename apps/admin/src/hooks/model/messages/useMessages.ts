import useSWR, { SWRConfiguration } from 'swr';
import { MessagesList } from '@blueprint/types';
import { API_MODEL } from '../../../config';

const fetcher = () => fetch(API_MODEL.messages).then((res) => res.json());

export const useMessages = (config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<MessagesList>({}, fetcher, config);

  return {
    messages: data ?? [],
    messagesLoading: isLoading,
    messagesError: error,
    ...rest,
  };
};
