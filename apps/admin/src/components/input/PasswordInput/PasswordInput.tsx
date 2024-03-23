import React, { useState, forwardRef, ComponentType } from 'react';
import { OutlinedInput, InputAdornment, IconButton, OutlinedInputProps } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export interface PasswordInputProps extends Partial<Omit<OutlinedInputProps, 'type'>> {
  icon?: ComponentType;
  disableToggle?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
  const { icon, disableToggle, ...rest } = props;

  const [visible, setVisible] = useState(false);

  const Icon = icon ?? LockIcon;
  const ToggleIcon = visible ? VisibilityIcon : VisibilityOffIcon;

  const toggleHandler = () => setVisible(!visible);

  return (
    <OutlinedInput
      type={visible ? 'text' : 'password'}
      startAdornment={
        <InputAdornment position="start">
          <Icon />
        </InputAdornment>
      }
      endAdornment={
        !disableToggle && (
          <InputAdornment position="end">
            <IconButton onClick={toggleHandler}>
              <ToggleIcon />
            </IconButton>
          </InputAdornment>
        )
      }
      ref={ref}
      {...rest}
    />
  );
});

export default PasswordInput;
