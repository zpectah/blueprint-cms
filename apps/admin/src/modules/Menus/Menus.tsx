import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { MenusContextProvider } from './context';
import { useMenusContextValue } from './hooks';
import { MenusList } from './MenusList';
import { MenusDetail } from './MenusDetail';

const Menus = () => {
  const { t } = useTranslation(['common', 'menus']);
  const providerValue = useMenusContextValue();

  return (
    <MenusContextProvider value={providerValue}>
      <ViewLayout
        title={t('menus:page.title')}
        subtitle={t('menus:page.subtitle')}
        meta={{
          title: t('menus:page.meta.title'),
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
