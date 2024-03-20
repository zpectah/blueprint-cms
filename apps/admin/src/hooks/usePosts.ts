import useSWR from 'swr';
import { PostsList } from '@blueprint/types';

const fetcher = () => fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => res.json());

export const usePosts = () => {
  const { data, error, isLoading } = useSWR<PostsList>({}, fetcher);

  return {
    posts: data ?? [],
    postsLoading: isLoading,
    postsError: error,
  };
};
