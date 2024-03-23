import { NotificationItem, NotificationItemId, NotificationItemList } from '../../types';
import { useCallback, useState } from 'react';

export const useNotificationsProviderValue = () => {
  const [notifications, setNotifications] = useState<NotificationItemList>([]);

  const autoCloseHandler = (id: NotificationItemId, autoClose: number) =>
    setTimeout(() => removeNotification(id), autoClose);

  const createNotificationHandler = (notification: NotificationItem) => {
    const tmpState = [...notifications];
    const newNotification = {
      ...notification,
    };
    tmpState.push(newNotification);
    setNotifications(tmpState);
  };

  const removeNotification = useCallback(
    (id: NotificationItemId) => {
      const tmpState = [...notifications];
      const index = tmpState.findIndex((item) => item.id === id);
      if (index > -1) tmpState.splice(index, 1);
      setNotifications(tmpState);
    },
    [notifications]
  );

  const addNotificationHandler = useCallback(
    (notification: NotificationItem) => {
      if (notification.autoClose) {
        createNotificationHandler(notification);
        autoCloseHandler(notification.id, notification.autoClose);
      } else {
        createNotificationHandler(notification);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [notifications]
  );

  const providerValue = {
    notifications,
    addNotification: addNotificationHandler,
    removeNotification: removeNotification,
  };

  return { ...providerValue };
};
