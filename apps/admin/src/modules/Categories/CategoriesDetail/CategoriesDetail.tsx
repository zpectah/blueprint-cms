import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { ROUTES } from '../../../config';
import { SPACING_BASE } from '../../../styles';
import { useCategoriesDetail } from '../../../model';
import { NEW_DETAIL_ID } from '../../../constants';
import { DetailDrawer, CheckButton } from '../../../components';
import { CATEGORIES_DETAIL_FORM_DEFAULTS, CATEGORIES_DETAIL_FORM_NEW, CATEGORIES_DETAIL_FORM_ID } from '../constants';
import { useCategoriesContext } from '../context';
import CategoriesDetailForm from './CategoriesDetailForm';

const CategoriesDetail = () => {
  const { id } = useParams();
  const { detail } = useCategoriesDetail(id);
  const { setDetailData } = useCategoriesContext();

  useEffect(() => {
    if (id === NEW_DETAIL_ID) {
      setDetailData(Object.assign(CATEGORIES_DETAIL_FORM_NEW));
    } else {
      // TODO
      // Handle form data on load
      setDetailData(Object.assign(CATEGORIES_DETAIL_FORM_DEFAULTS));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DetailDrawer
      id={id}
      route={ROUTES.categories.path}
      title="Detail title"
      subtitle="Detail subtitle"
      actions={
        <>
          <Stack direction="row" gap={SPACING_BASE}>
            <Button variant="contained" color="primary" type="submit" form={CATEGORIES_DETAIL_FORM_ID}>
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
        ...Categories Detail Form...#{id} ... {detail?.id}
        <br />
        <CategoriesDetailForm />
      </>
    </DetailDrawer>
  );
};

export default CategoriesDetail;
