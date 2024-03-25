import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { useCategoriesTranslations } from '../../hooks';
import { ViewLayout } from '../../components';
import { CategoriesContextProvider } from './context';
import { useCategoriesContextValue } from './hooks';
import { CategoriesList } from './CategoriesList';
import { CategoriesDetail } from './CategoriesDetail';

const Categories = () => {
  const { t, mt } = useCategoriesTranslations();
  const providerValue = useCategoriesContextValue();

  return (
    <CategoriesContextProvider value={providerValue}>
      <ViewLayout
        title={mt['page.title']}
        subtitle={mt['page.subtitle']}
        meta={{
          title: mt['page.meta.title'],
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.categories.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            {t('label.categories_new')}
          </Button>
        }
      >
        <CategoriesList />
        <CategoriesDetail />
      </ViewLayout>
    </CategoriesContextProvider>
  );
};

export default Categories;
