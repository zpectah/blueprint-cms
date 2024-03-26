import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { ROUTES } from '../../../config';
import { SPACING_BASE } from '../../../styles';
import { useUsersDetail } from '../../../hooks';
import { NEW_DETAIL_ID } from '../../../constants';
import { DetailDrawer, CheckButton } from '../../../components';
import { FILES_DETAIL_FORM_DEFAULTS, FILES_DETAIL_FORM_NEW } from '../constants';
import { useFilesContext } from '../context';
import FilesDetailForm from './FilesDetailForm';

const FilesDetail = () => {
  const { id } = useParams();
  const { detail } = useUsersDetail(id);
  const { setDetailData } = useFilesContext();

  useEffect(() => {
    if (id === NEW_DETAIL_ID) {
      setDetailData(Object.assign(FILES_DETAIL_FORM_NEW));
    } else {
      // TODO
      // Handle form data on load
      setDetailData(Object.assign(FILES_DETAIL_FORM_DEFAULTS));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DetailDrawer
      id={id}
      route={ROUTES.files.path}
      title="File title"
      // subtitle="Detail subtitle"
      actions={
        <>
          <Stack direction="row" gap={SPACING_BASE}>
            <Button variant="contained" color="primary">
              Button
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
        ...Users Detail Form...#{id} ... {detail?.id}
        <br />
        <FilesDetailForm />
      </>
    </DetailDrawer>
  );
};

export default FilesDetail;
