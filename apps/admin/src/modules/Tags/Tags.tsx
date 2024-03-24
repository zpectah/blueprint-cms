import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { TagsContextProvider } from './context';
import { useTagsContextValue } from './hooks';
import { TagsList } from './TagsList';
import { TagsDetail } from './TagsDetail';

const Tags = () => {
  const { ...providerValue } = useTagsContextValue();

  return (
    <TagsContextProvider value={providerValue}>
      <ViewLayout
        title="Tags"
        meta={{
          title: 'Tags',
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.tags.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            New tag
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
