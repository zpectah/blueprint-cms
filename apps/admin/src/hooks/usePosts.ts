import useSWR from 'swr';
// import { PostsItem, PostsList } from '@blueprint/types';

export const usePosts = () => {
  // eslint-disable-next-line
  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: posts, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);
  // const posts: PostsList = []; // https://jsonplaceholder.typicode.com/posts

  return {
    posts,
    postsLoading: isLoading,
    postsError: error,
  };
};
