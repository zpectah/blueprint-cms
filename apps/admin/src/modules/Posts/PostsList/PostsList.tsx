import React from 'react';
import { PostsItem } from '@blueprint/types';
import { DataList } from '../../../components';
import { usePosts } from '../../../model';

const PostsList = () => {
  const { posts } = usePosts();

  return (
    <div>
      <DataList<PostsItem> model="posts" items={posts} />
    </div>
  );
};

export default PostsList;
