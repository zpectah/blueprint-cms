import React, { forwardRef, useMemo } from 'react';
import { Button, ButtonProps } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { CheckButtonProps } from './types';

const CheckButton = forwardRef<HTMLButtonElement, CheckButtonProps>((props, ref) => {
  const { children, checked, ...rest } = props;

  const Icon = useMemo(() => (checked ? CheckBoxIcon : CheckBoxOutlineBlankIcon), [checked]);

  return (
    <Button ref={ref} startIcon={<Icon />} {...rest}>
      {children}
    </Button>
  );
});

export default CheckButton;
