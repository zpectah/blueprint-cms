import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { ROUTES } from '../../../config';
import { SPACING_BASE } from '../../../styles';
import { DetailDrawer, CheckButton } from '../../../components';
import { useUsersDetail } from '../../../model';
import { IUsersDetailForm } from '../types';
import { USERS_DETAIL_FORM_DEFAULTS, USERS_DETAIL_FORM_NEW } from '../constants';
import UsersDetailForm from './UsersDetailForm';

const UsersDetail = () => {
  const [formData, setFormData] = useState<IUsersDetailForm>(USERS_DETAIL_FORM_DEFAULTS);

  const { id } = useParams();
  const { detail } = useUsersDetail(id);

  const formId = 'user-detail-form';

  useEffect(() => {
    if (id === 'new') {
      setFormData(USERS_DETAIL_FORM_NEW);
    } else {
      // TODO
      // Handle form data on load
      setFormData(USERS_DETAIL_FORM_DEFAULTS);
    }
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
            <Button variant="contained" color="primary" type="submit" form={formId}>
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
        <UsersDetailForm formId={formId} formData={formData} />
      </>
    </DetailDrawer>
  );
};

export default UsersDetail;
