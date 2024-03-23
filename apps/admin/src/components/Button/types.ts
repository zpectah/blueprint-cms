import { ButtonProps, IconButtonProps, SvgIconProps } from '@mui/material';

export type CloseButtonProps = Partial<IconButtonProps> & {
  iconProps?: SvgIconProps;
};

export type CheckButtonProps = ButtonProps & {
  checked?: boolean;
};
