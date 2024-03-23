import { ButtonProps, IconButtonProps, SvgIconProps } from '@mui/material';

export type CloseButtonProps = Partial<IconButtonProps> & {
  iconProps?: SvgIconProps;
};

export type CheckButtonProps = Omit<ButtonProps, 'onClick'> & {
  checked?: boolean;
  onChecked?: (checked: boolean) => void;
};
