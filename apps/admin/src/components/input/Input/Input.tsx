import React, { forwardRef, ReactNode } from 'react';
import { OutlinedInput, InputAdornment, OutlinedInputProps } from '@mui/material';

export interface InputProps extends Partial<Omit<OutlinedInputProps, 'startAdornment' | 'endAdornment'>> {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { startAdornment, endAdornment, ...rest } = props;

  return (
    <OutlinedInput
      startAdornment={startAdornment && <InputAdornment position="start">{startAdornment}</InputAdornment>}
      endAdornment={endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>}
      ref={ref}
      {...rest}
    />
  );
});

export default Input;
