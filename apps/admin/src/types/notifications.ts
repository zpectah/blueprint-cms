import { ReactNode } from 'react';
import { notificationsSeverityKeys } from '../enums';

export type NotificationSeverity = keyof typeof notificationsSeverityKeys;

export type NotificationItemId = number | string;

export interface NotificationItem {
  id: NotificationItemId;
  title: ReactNode;
  content?: ReactNode;
  severity?: NotificationSeverity;
  autoClose?: number;
  onClose?: (id: NotificationItemId) => void;
  important?: boolean;
}

export type NotificationItemList = NotificationItem[];
