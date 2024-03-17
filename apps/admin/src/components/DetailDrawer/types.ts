import { ReactNode } from 'react';
import { DrawerProps } from '@mui/material';
import { WithChildren } from '../../types';

export interface DetailDrawerProps extends WithChildren {
  id?: string;
  route: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  drawerProps?: Partial<DrawerProps>;
}
