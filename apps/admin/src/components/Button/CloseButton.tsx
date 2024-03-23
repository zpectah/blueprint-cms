import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CloseButtonProps } from './types';

const CloseButton = (props: CloseButtonProps) => {
  const { iconProps, ...rest } = props;

  return (
    <IconButton {...rest}>
      <CloseIcon {...iconProps} />
    </IconButton>
  );
};

export default CloseButton;
