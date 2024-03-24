import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { ROUTES } from '../../../config';
import { SPACING_BASE } from '../../../styles';
import { useTranslationsDetail } from '../../../model';
import { NEW_DETAIL_ID } from '../../../constants';
import { DetailDrawer, CheckButton } from '../../../components';
import {
  TRANSLATIONS_DETAIL_FORM_DEFAULTS,
  TRANSLATIONS_DETAIL_FORM_NEW,
  TRANSLATIONS_DETAIL_FORM_ID,
} from '../constants';
import { useTranslationsContext } from '../context';
import TranslationsDetailForm from './TranslationsDetailForm';

const TranslationsDetail = () => {
  const { id } = useParams();
  const { detail } = useTranslationsDetail(id);
  const { setDetailData } = useTranslationsContext();

  useEffect(() => {
    if (id === NEW_DETAIL_ID) {
      setDetailData(Object.assign(TRANSLATIONS_DETAIL_FORM_NEW));
    } else {
      // TODO
      // Handle form data on load
      setDetailData(Object.assign(TRANSLATIONS_DETAIL_FORM_DEFAULTS));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DetailDrawer
      id={id}
      route={ROUTES.translations.path}
      title="Detail title"
      subtitle="Detail subtitle"
      actions={
        <>
          <Stack direction="row" gap={SPACING_BASE}>
            <Button variant="contained" color="primary" type="submit" form={TRANSLATIONS_DETAIL_FORM_ID}>
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
        ...Translations Detail Form...#{id} ... {detail?.id}
        <br />
        <TranslationsDetailForm />
      </>
    </DetailDrawer>
  );
};

export default TranslationsDetail;
