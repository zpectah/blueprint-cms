import { ReactNode } from 'react';
import { DrawerProps } from '@mui/material';
import { WithChildren } from '@blueprint/types';

export interface DetailDrawerProps extends WithChildren {
  id?: string;
  route: string;
  title?: string;
  subtitle?: string;
  headerActions?: ReactNode;
  actions?: ReactNode;
  drawerProps?: Partial<DrawerProps>;
  sidebar?: ReactNode;
  sidebarWidth?: string;
}
