import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { PostsContextProvider } from './context';
import { usePostsContextValue } from './hooks';
import { PostsList } from './PostsList';
import { PostsDetail } from './PostsDetail';

const Posts = () => {
  const { t } = useTranslation(['common', 'posts']);
  const providerValue = usePostsContextValue();

  return (
    <PostsContextProvider value={providerValue}>
      <ViewLayout
        title={t('posts:page.title')}
        subtitle={t('posts:page.subtitle')}
        meta={{
          title: t('posts:page.meta.title'),
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.posts.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            {t('label.posts_new')}
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
