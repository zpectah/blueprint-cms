import React, { forwardRef, ComponentType } from 'react';
import { OutlinedInput, InputAdornment, OutlinedInputProps } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export interface EmailInputProps extends Partial<OutlinedInputProps> {
  icon?: ComponentType;
}

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>((props, ref) => {
  const { icon, ...rest } = props;

  const Icon = icon ?? AlternateEmailIcon;

  return (
    <OutlinedInput
      type="email"
      startAdornment={
        <InputAdornment position="start">
          <Icon />
        </InputAdornment>
      }
      ref={ref}
      {...rest}
    />
  );
});

export default EmailInput;
