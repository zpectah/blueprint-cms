import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { PagesContextProvider } from './context';
import { usePagesContextValue } from './hooks';
import { PagesList } from './PagesList';
import { PagesDetail } from './PagesDetail';

const Pages = () => {
  const { t } = useTranslation(['common', 'pages']);
  const providerValue = usePagesContextValue();

  return (
    <PagesContextProvider value={providerValue}>
      <ViewLayout
        title={t('pages:page.title')}
        subtitle={t('pages:page.subtitle')}
        meta={{
          title: t('pages:page.meta.title'),
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
