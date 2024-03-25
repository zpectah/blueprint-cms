import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { usePagesTranslations } from '../../hooks';
import { ViewLayout } from '../../components';
import { PagesContextProvider } from './context';
import { usePagesContextValue } from './hooks';
import { PagesList } from './PagesList';
import { PagesDetail } from './PagesDetail';

const Pages = () => {
  const { t, mt } = usePagesTranslations();
  const providerValue = usePagesContextValue();

  return (
    <PagesContextProvider value={providerValue}>
      <ViewLayout
        title={mt['page.title']}
        subtitle={mt['page.subtitle']}
        meta={{
          title: mt['page.meta.title'],
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.pages.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            {t('label.pages_new')}
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
