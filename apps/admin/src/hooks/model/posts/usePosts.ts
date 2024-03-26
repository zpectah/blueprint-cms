import useSWR, { SWRConfiguration } from 'swr';
import { PostsList } from '@blueprint/types';
import { API_MODEL } from '../../../config';

const fetcher = () => fetch(API_MODEL.posts).then((res) => res.json());

export const usePosts = (config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<PostsList>({}, fetcher, config);

  return {
    posts: data ?? [],
    postsLoading: isLoading,
    postsError: error,
    ...rest,
  };
};
