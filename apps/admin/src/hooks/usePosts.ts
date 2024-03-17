import { PostsItem, PostsList } from '@blueprint/types';

export const usePosts = () => {
  const posts: PostsList = [];

  const getDetail = (id: string | undefined): PostsItem | undefined => {
    if (!id) return undefined;

    return {
      id: id,
    };
  };

  return {
    posts,
    getDetail,
  };
};
