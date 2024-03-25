import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { useMenusTranslations } from '../../hooks';
import { ViewLayout } from '../../components';
import { MenusContextProvider } from './context';
import { useMenusContextValue } from './hooks';
import { MenusList } from './MenusList';
import { MenusDetail } from './MenusDetail';

const Menus = () => {
  const { t, mt } = useMenusTranslations();
  const providerValue = useMenusContextValue();

  return (
    <MenusContextProvider value={providerValue}>
      <ViewLayout
        title={mt['page.title']}
        subtitle={mt['page.subtitle']}
        meta={{
          title: mt['page.meta.title'],
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.menus.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            {t('label.menus_new')}
          </Button>
        }
      >
        <MenusList />
        <MenusDetail />
      </ViewLayout>
    </MenusContextProvider>
  );
};

export default Menus;
