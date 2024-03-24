import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { ROUTES } from '../../../config';
import { SPACING_BASE } from '../../../styles';
import { DetailDrawer, CheckButton } from '../../../components';
import { useMenusDetail } from '../../../model';
import { MENUS_DETAIL_FORM_DEFAULTS, MENUS_DETAIL_FORM_NEW, MENUS_DETAIL_FORM_ID } from '../constants';
import { useMenusContext } from '../context';
import MenusDetailForm from './MenusDetailForm';

const MenusDetail = () => {
  const { id } = useParams();
  const { detail } = useMenusDetail(id);
  const { setDetailData } = useMenusContext();

  useEffect(() => {
    if (id === 'new') {
      setDetailData(Object.assign(MENUS_DETAIL_FORM_NEW));
    } else {
      // TODO
      // Handle form data on load
      setDetailData(Object.assign(MENUS_DETAIL_FORM_DEFAULTS));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DetailDrawer
      id={id}
      route={ROUTES.menus.path}
      title="Detail title"
      subtitle="Detail subtitle"
      actions={
        <>
          <Stack direction="row" gap={SPACING_BASE}>
            <Button variant="contained" color="primary" type="submit" form={MENUS_DETAIL_FORM_ID}>
              Submit
            </Button>
            <CheckButton>Save as template</CheckButton>
          </Stack>
          <Button variant="outlined" color="primary">
            Button
          </Button>
        </>
      }
    >
      <>
        ...Menus Detail Form...#{id} ... {detail?.id}
        <br />
        <MenusDetailForm />
      </>
    </DetailDrawer>
  );
};

export default MenusDetail;
