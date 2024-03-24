import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { MenusContextProvider } from './context';
import { useMenusContextValue } from './hooks';
import { MenusList } from './MenusList';
import { MenusDetail } from './MenusDetail';

const Menus = () => {
  const { ...providerValue } = useMenusContextValue();

  return (
    <MenusContextProvider value={providerValue}>
      <ViewLayout
        title="Menus"
        meta={{
          title: 'Menus',
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.menus.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            New menu
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
