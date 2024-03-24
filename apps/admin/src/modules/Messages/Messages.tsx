import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { ViewLayout } from '../../components';
import { MessagesContextProvider } from './context';
import { useMessagesContextValue } from './hooks';
import { MessagesList } from './MessagesList';
import { MessagesDetail } from './MessagesDetail';

const Messages = () => {
  const { t } = useTranslation(['common', 'messages']);
  const providerValue = useMessagesContextValue();

  return (
    <MessagesContextProvider value={providerValue}>
      <ViewLayout
        title={t('messages:page.title')}
        subtitle={t('messages:page.subtitle')}
        meta={{
          title: t('messages:page.meta.title'),
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.messages.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            {t('label.messages_new')}
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
