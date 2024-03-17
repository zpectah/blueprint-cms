import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { DetailDrawer } from '../../components';
import { useUsers } from '../../hooks';

const UsersDetail = () => {
  const { id } = useParams();
  const { getDetail } = useUsers();
  const detailData = getDetail(id);

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
        ...Users Detail Form...#{id}
        <pre>
          <code>{JSON.stringify(detailData, null, 2)}</code>
        </pre>
      </>
    </DetailDrawer>
  );
};

export default UsersDetail;
