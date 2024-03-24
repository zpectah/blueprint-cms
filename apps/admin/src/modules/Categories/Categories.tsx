import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { CategoriesContextProvider } from './context';
import { useCategoriesContextValue } from './hooks';
import { CategoriesList } from './CategoriesList';
import { CategoriesDetail } from './CategoriesDetail';

const Categories = () => {
  const { ...providerValue } = useCategoriesContextValue();

  return (
    <CategoriesContextProvider value={providerValue}>
      <ViewLayout
        title="Categories"
        meta={{
          title: 'Categories',
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.categories.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            New category
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
