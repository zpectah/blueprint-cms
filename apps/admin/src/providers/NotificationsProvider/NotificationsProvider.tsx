import React from 'react';
import { WithChildren } from '../../types';
import { AppNotificationsContextProvider } from '../../contexts';
import { useNotificationsProviderValue } from './useNotificationsProviderValue';

type NotificationsProviderProps = WithChildren;

const NotificationsProvider = ({ children }: NotificationsProviderProps) => {
  const providerValue = useNotificationsProviderValue();

  return <AppNotificationsContextProvider value={providerValue}>{children}</AppNotificationsContextProvider>;
};

export default NotificationsProvider;
