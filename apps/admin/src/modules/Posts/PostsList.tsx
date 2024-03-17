import React from 'react';
import { DataList } from '../../components';
import { usePosts } from '../../hooks';

const PostsList = () => {
  const { posts } = usePosts();

  return (
    <div>
      <DataList items={posts} />
    </div>
  );
};

export default PostsList;
