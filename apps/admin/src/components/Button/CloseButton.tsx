import React from 'react';
import { IconButton, IconButtonProps, SvgIconProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export type CloseButtonProps = Partial<IconButtonProps> & {
  iconProps?: SvgIconProps;
};

const CloseButton = (props: CloseButtonProps) => {
  const { iconProps, ...rest } = props;

  return (
    <IconButton {...rest}>
      <CloseIcon {...iconProps} />
    </IconButton>
  );
};

export default CloseButton;
