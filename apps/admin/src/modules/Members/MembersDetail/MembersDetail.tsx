import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { ROUTES } from '../../../config';
import { SPACING_BASE } from '../../../styles';
import { useMembersDetail } from '../../../hooks';
import { NEW_DETAIL_ID } from '../../../constants';
import { DetailDrawer, CheckButton } from '../../../components';
import { MEMBERS_DETAIL_FORM_DEFAULTS, MEMBERS_DETAIL_FORM_ID, MEMBERS_DETAIL_FORM_NEW } from '../constants';
import { useMembersContext } from '../context';
import MembersDetailForm from './MembersDetailForm';

const MembersDetail = () => {
  const { id } = useParams();
  const { detail } = useMembersDetail(id);
  const { setDetailData } = useMembersContext();

  useEffect(() => {
    if (id === NEW_DETAIL_ID) {
      setDetailData(Object.assign(MEMBERS_DETAIL_FORM_NEW));
    } else {
      // TODO
      // Handle form data on load
      setDetailData(Object.assign(MEMBERS_DETAIL_FORM_DEFAULTS));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DetailDrawer
      id={id}
      route={ROUTES.members.path}
      title="Detail title"
      subtitle="Detail subtitle"
      actions={
        <>
          <Stack direction="row" gap={SPACING_BASE}>
            <Button variant="contained" color="primary" type="submit" form={MEMBERS_DETAIL_FORM_ID}>
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
        ...Members Detail Form...#{id} ... {detail?.id}
        <br />
        <MembersDetailForm />
      </>
    </DetailDrawer>
  );
};

export default MembersDetail;
