import React from 'react';
import { IconButton, IconButtonProps, SvgIconProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export type DrawerCloseButtonProps = Partial<IconButtonProps> & {
  iconProps?: SvgIconProps;
  isMobile?: boolean;
};

const DrawerCloseButton = (props: DrawerCloseButtonProps) => {
  const { iconProps, isMobile, ...rest } = props;

  const Icon = isMobile ? CloseIcon : ArrowForwardIcon;

  return (
    <IconButton {...rest}>
      <Icon {...iconProps} />
    </IconButton>
  );
};

export default DrawerCloseButton;
