import useSWR from 'swr';
// import { PostsItem, PostsList } from '@blueprint/types';

export const usePostsDetail = (id?: string) => {
  // eslint-disable-next-line
  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: postDetail, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`, fetcher);

  return {
    postDetail,
    postDetailLoading: isLoading,
    postDetailError: error,
  };
};
