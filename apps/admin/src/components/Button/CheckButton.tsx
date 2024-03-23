import React, { forwardRef, useMemo, useState, MouseEventHandler } from 'react';
import { Button } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { CheckButtonProps } from './types';

const CheckButton = forwardRef<HTMLButtonElement, CheckButtonProps>((props, ref) => {
  const { children, checked, onChecked, onClick, ...rest } = props;

  const [isChecked, setChecked] = useState(checked);

  const Icon = useMemo(() => (isChecked ? CheckBoxIcon : CheckBoxOutlineBlankIcon), [isChecked]);

  return (
    <Button
      ref={ref}
      startIcon={<Icon />}
      onClick={(e) => {
        const currentChecked = !isChecked;
        setChecked(currentChecked);
        if (onChecked) onChecked(currentChecked);
        if (onClick) onClick(e);
      }}
      {...rest}
    >
      {children}
    </Button>
  );
});

export default CheckButton;
