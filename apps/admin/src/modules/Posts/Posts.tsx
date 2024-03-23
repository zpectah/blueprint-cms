import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { ViewLayout } from '../../components';
import PostsList from './PostsList';
import PostsDetail from './PostsDetail';

const Posts = () => {
  return (
    <ViewLayout
      title="Posts"
      meta={{
        title: 'Posts',
      }}
      actions={
        <Button component={Link} to={`${ROUTES.posts.path}/new`} variant="contained" color="primary">
          New Post
        </Button>
      }
    >
      <PostsList />
      <PostsDetail />
    </ViewLayout>
  );
};

export default Posts;
