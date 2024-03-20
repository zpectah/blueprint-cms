import useSWR from 'swr';
import { PostsItem } from '@blueprint/types';

const fetcher = (id: string) => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json());

export const usePostsDetail = (id?: string) => {
  const { data: postDetail, error, isLoading } = useSWR<PostsItem>(id !== 'new' && id, fetcher);

  return {
    postDetail,
    postDetailLoading: isLoading,
    postDetailError: error,
  };
};
