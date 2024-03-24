import { ReactNode } from 'react';
import { BoxProps } from '@mui/material';
import { WithChildren, ElementProps } from '@blueprint/types';

export type FieldsetLegendProps = ElementProps<'legend'>;

export interface FormFieldsetProps extends WithChildren {
  legend?: ReactNode;
  legendProps?: Partial<FieldsetLegendProps>;
  boxProps?: Partial<BoxProps>;
}
