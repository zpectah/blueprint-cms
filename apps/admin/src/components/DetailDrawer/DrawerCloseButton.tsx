import React from 'react';
import { IconButton, IconButtonProps, SvgIconProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useBreakpoint } from '../../hooks';

export type DrawerCloseButtonProps = Partial<IconButtonProps> & {
  iconProps?: SvgIconProps;
};

const DrawerCloseButton = (props: DrawerCloseButtonProps) => {
  const { iconProps, ...rest } = props;

  const { isMobile } = useBreakpoint();

  const Icon = isMobile ? CloseIcon : ArrowForwardIcon;

  return (
    <IconButton {...rest}>
      <Icon {...iconProps} />
    </IconButton>
  );
};

export default DrawerCloseButton;
