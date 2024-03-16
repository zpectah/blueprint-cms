import { WithChildren } from '../../types';
import { ReactNode } from 'react';

export interface DetailDrawerProps extends WithChildren {
  id?: string;
  route: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
}
