import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { DetailDrawer } from '../../components';
import { useUsersDetail } from '../../model';

const UsersDetail = () => {
  const { id } = useParams();
  const { detail } = useUsersDetail(id);

  return (
    <DetailDrawer
      id={id}
      route={ROUTES.users.path}
      title="Detail title"
      subtitle="Detail subtitle"
      actions={
        <>
          <Button variant="contained" color="primary" disableElevation>
            Button
          </Button>
          <Button variant="outlined" color="primary" disableElevation>
            Button
          </Button>
        </>
      }
    >
      <>
        ...Users Detail Form...#{id} ... {detail?.id}
      </>
    </DetailDrawer>
  );
};

export default UsersDetail;
