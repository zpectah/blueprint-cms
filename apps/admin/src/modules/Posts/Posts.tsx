import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { PostsContextProvider } from './context';
import { usePostsContextValue } from './hooks';
import { PostsList } from './PostsList';
import { PostsDetail } from './PostsDetail';

const Posts = () => {
  const { ...providerValue } = usePostsContextValue();

  return (
    <PostsContextProvider value={providerValue}>
      <ViewLayout
        title="Posts"
        meta={{
          title: 'Posts',
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.posts.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            New Post
          </Button>
        }
      >
        <PostsList />
        <PostsDetail />
      </ViewLayout>
    </PostsContextProvider>
  );
};

export default Posts;
