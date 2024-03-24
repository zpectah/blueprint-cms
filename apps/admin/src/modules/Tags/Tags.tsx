import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { TagsContextProvider } from './context';
import { useTagsContextValue } from './hooks';
import { TagsList } from './TagsList';
import { TagsDetail } from './TagsDetail';

const Tags = () => {
  const { t } = useTranslation(['common', 'tags']);
  const providerValue = useTagsContextValue();

  return (
    <TagsContextProvider value={providerValue}>
      <ViewLayout
        title={t('tags:page.title')}
        subtitle={t('tags:page.subtitle')}
        meta={{
          title: t('tags:page.meta.title'),
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.tags.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            {t('label.tags_new')}
          </Button>
        }
      >
        <TagsList />
        <TagsDetail />
      </ViewLayout>
    </TagsContextProvider>
  );
};

export default Tags;
