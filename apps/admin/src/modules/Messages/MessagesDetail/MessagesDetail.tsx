import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { ROUTES } from '../../../config';
import { SPACING_BASE } from '../../../styles';
import { DetailDrawer, CheckButton } from '../../../components';
import { useMessagesDetail } from '../../../model';
import { MESSAGES_DETAIL_FORM_DEFAULTS, MESSAGES_DETAIL_FORM_NEW, MESSAGES_DETAIL_FORM_ID } from '../constants';
import { useMessagesContext } from '../context';
import MessagesDetailForm from './MessagesDetailForm';

const MessagesDetail = () => {
  const { id } = useParams();
  const { detail } = useMessagesDetail(id);
  const { setDetailData } = useMessagesContext();

  useEffect(() => {
    if (id === 'new') {
      setDetailData(Object.assign(MESSAGES_DETAIL_FORM_NEW));
    } else {
      // TODO
      // Handle form data on load
      setDetailData(Object.assign(MESSAGES_DETAIL_FORM_DEFAULTS));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DetailDrawer
      id={id}
      route={ROUTES.messages.path}
      title="Detail title"
      subtitle="Detail subtitle"
      actions={
        <>
          <Stack direction="row" gap={SPACING_BASE}>
            <Button variant="contained" color="primary" type="submit" form={MESSAGES_DETAIL_FORM_ID}>
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
        ...Messages Detail Form...#{id} ... {detail?.id}
        <br />
        <MessagesDetailForm />
      </>
    </DetailDrawer>
  );
};

export default MessagesDetail;
