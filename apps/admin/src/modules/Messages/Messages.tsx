import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { MessagesContextProvider } from './context';
import { useMessagesContextValue } from './hooks';
import { MessagesList } from './MessagesList';
import { MessagesDetail } from './MessagesDetail';

const Messages = () => {
  const { ...providerValue } = useMessagesContextValue();

  return (
    <MessagesContextProvider value={providerValue}>
      <ViewLayout
        title="Messages"
        meta={{
          title: 'Messages',
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.messages.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            New message (?)
          </Button>
        }
      >
        <MessagesList />
        <MessagesDetail />
      </ViewLayout>
    </MessagesContextProvider>
  );
};

export default Messages;
