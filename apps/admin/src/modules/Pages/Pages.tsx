import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { PagesContextProvider } from './context';
import { usePagesContextValue } from './hooks';
import { PagesList } from './PagesList';
import { PagesDetail } from './PagesDetail';

const Pages = () => {
  const { ...providerValue } = usePagesContextValue();

  return (
    <PagesContextProvider value={providerValue}>
      <ViewLayout
        title="Pages"
        meta={{
          title: 'Pages',
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.pages.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            New page
          </Button>
        }
      >
        <PagesList />
        <PagesDetail />
      </ViewLayout>
    </PagesContextProvider>
  );
};

export default Pages;
