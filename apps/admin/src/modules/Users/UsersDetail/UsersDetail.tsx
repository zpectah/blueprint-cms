import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { ROUTES } from '../../../config';
import { SPACING_BASE } from '../../../styles';
import { DetailDrawer, CheckButton } from '../../../components';
import { useUsersDetail } from '../../../model';
import { USERS_DETAIL_FORM_DEFAULTS, USERS_DETAIL_FORM_ID, USERS_DETAIL_FORM_NEW } from '../constants';
import { useUsersContext } from '../context';
import UsersDetailForm from './UsersDetailForm';

const UsersDetail = () => {
  const { id } = useParams();
  const { detail } = useUsersDetail(id);
  const { setDetailData } = useUsersContext();

  useEffect(() => {
    if (id === 'new') {
      setDetailData(Object.assign(USERS_DETAIL_FORM_NEW));
    } else {
      // TODO
      // Handle form data on load
      setDetailData(Object.assign(USERS_DETAIL_FORM_DEFAULTS));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DetailDrawer
      id={id}
      route={ROUTES.users.path}
      title="Detail title"
      subtitle="Detail subtitle"
      actions={
        <>
          <Stack direction="row" gap={SPACING_BASE}>
            <Button variant="contained" color="primary" type="submit" form={USERS_DETAIL_FORM_ID}>
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
        ...Users Detail Form...#{id} ... {detail?.id}
        <br />
        <UsersDetailForm />
      </>
    </DetailDrawer>
  );
};

export default UsersDetail;
