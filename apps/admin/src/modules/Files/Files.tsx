import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { FilesContextProvider } from './context';
import { useFilesContextValue } from './hooks';
import { FilesList } from './FilesList';
import { FilesDetail } from './FilesDetail';

const Files = () => {
  const { t } = useTranslation(['common', 'files']);
  const providerValue = useFilesContextValue();

  return (
    <FilesContextProvider value={providerValue}>
      <ViewLayout
        title={t('files:page.title')}
        subtitle={t('files:page.subtitle')}
        meta={{
          title: t('files:page.meta.title'),
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.files.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            {t('label.files_new')}
          </Button>
        }
      >
        <FilesList />
        <FilesDetail />
      </ViewLayout>
    </FilesContextProvider>
  );
};

export default Files;
