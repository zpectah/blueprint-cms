import useSWR, { SWRConfiguration } from 'swr';
import { TagsList } from '@blueprint/types';
import { API_MODEL } from '../../config';

const fetcher = () => fetch(API_MODEL.tags).then((res) => res.json());

export const useTags = (config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<TagsList>({}, fetcher, config);

  return {
    tags: data ?? [],
    tagsLoading: isLoading,
    tagsError: error,
    ...rest,
  };
};
