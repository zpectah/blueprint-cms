import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { TranslationsContextProvider } from './context';
import { useTranslationsContextValue } from './hooks';
import { TranslationsList } from './TranslationsList';
import { TranslationsDetail } from './TranslationsDetail';

const Translations = () => {
  const { t } = useTranslation(['common', 'translations']);
  const providerValue = useTranslationsContextValue();

  return (
    <TranslationsContextProvider value={providerValue}>
      <ViewLayout
        title={t('translations:page.title')}
        subtitle={t('translations:page.subtitle')}
        meta={{
          title: t('translations:page.meta.title'),
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.translations.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            {t('label.translations_new')}
          </Button>
        }
      >
        <TranslationsList />
        <TranslationsDetail />
      </ViewLayout>
    </TranslationsContextProvider>
  );
};

export default Translations;
