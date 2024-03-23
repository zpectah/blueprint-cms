import React from 'react';
import { styled, Box, Alert, AlertTitle } from '@mui/material';
import { useAppNotificationsContext } from '../../../contexts';

const NotificationsListWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

interface NotificationsListProps {
  id?: string;
}

const NotificationsList = ({ id }: NotificationsListProps) => {
  const { notifications, removeNotification } = useAppNotificationsContext();

  return (
    <NotificationsListWrapper id={id}>
      {notifications.map(({ id, title, content, severity, onClose, important }) => {
        const closeHandler = () => {
          removeNotification(id);
          if (onClose) onClose(id);
        };

        return (
          <Alert
            key={id}
            variant={important ? 'filled' : 'standard'}
            severity={severity}
            onClose={closeHandler}
            icon={false}
          >
            <AlertTitle>{title}</AlertTitle>
            {content}
          </Alert>
        );
      })}
    </NotificationsListWrapper>
  );
};

export default NotificationsList;
