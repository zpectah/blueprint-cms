import { ReactNode } from 'react';
import { BoxProps } from '@mui/material';
import { WithChildren } from '../../../types';

export type FormFieldMessageSeverity = 'default' | 'success' | 'warning' | 'error';

export interface FormFieldMessageProps extends WithChildren {
  severity?: FormFieldMessageSeverity;
}

export interface FormFieldProps extends WithChildren {
  label?: ReactNode;
  fieldId?: string;
  helperTexts?: Partial<FormFieldMessageProps>[];
  helperTextProps?: Partial<FormFieldMessageProps>;
  inputBoxProps?: Partial<BoxProps>;
}
