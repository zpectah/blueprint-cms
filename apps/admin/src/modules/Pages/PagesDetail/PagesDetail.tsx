import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { ROUTES } from '../../../config';
import { SPACING_BASE } from '../../../styles';
import { usePagesDetail } from '../../../hooks';
import { NEW_DETAIL_ID } from '../../../constants';
import { DetailDrawer, CheckButton } from '../../../components';
import { PAGES_DETAIL_FORM_DEFAULTS, PAGES_DETAIL_FORM_NEW, PAGES_DETAIL_FORM_ID } from '../constants';
import { usePagesContext } from '../context';
import PagesDetailForm from './PagesDetailForm';

const PagesDetail = () => {
  const { id } = useParams();
  const { detail } = usePagesDetail(id);
  const { setDetailData } = usePagesContext();

  useEffect(() => {
    if (id === NEW_DETAIL_ID) {
      setDetailData(Object.assign(PAGES_DETAIL_FORM_NEW));
    } else {
      // TODO
      // Handle form data on load
      setDetailData(Object.assign(PAGES_DETAIL_FORM_DEFAULTS));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DetailDrawer
      id={id}
      route={ROUTES.pages.path}
      title="Detail title"
      subtitle="Detail subtitle"
      actions={
        <>
          <Stack direction="row" gap={SPACING_BASE}>
            <Button variant="contained" color="primary" type="submit" form={PAGES_DETAIL_FORM_ID}>
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
        ...Pages Detail Form...#{id} ... {detail?.id}
        <br />
        <PagesDetailForm />
      </>
    </DetailDrawer>
  );
};

export default PagesDetail;
