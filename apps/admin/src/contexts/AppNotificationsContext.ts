import { createContext, useContext } from 'react';
import { NotificationItem, NotificationItemId, NotificationItemList } from '../types';

interface AppNotificationsContextProps {
  notifications: NotificationItemList;
  addNotification: (notification: NotificationItem) => void;
  removeNotification: (id: NotificationItemId) => void;
}

const defaultContext: AppNotificationsContextProps = {
  notifications: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addNotification: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeNotification: () => {},
};

const AppNotificationsContext = createContext(defaultContext);

export const AppNotificationsContextProvider = AppNotificationsContext.Provider;
export const AppNotificationsContextConsumer = AppNotificationsContext.Consumer;

export const useAppNotificationsContext = () => useContext(AppNotificationsContext);

export default AppNotificationsContext;
