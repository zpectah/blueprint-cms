import React, { ReactNode } from 'react';
import { styled, Box, Typography, BoxProps } from '@mui/material';
import { WithChildren } from '@blueprint/types';
import { SPACING_BASE } from '../../../styles';

const BlockWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: SPACING_BASE,
  padding: SPACING_BASE,
});

export interface FormBlockProps extends WithChildren {
  boxProps?: Partial<BoxProps>;
  title?: ReactNode;
}

const FormBlock = (props: FormBlockProps) => {
  const { children, boxProps, title } = props;

  return (
    <BlockWrapper {...boxProps}>
      {title && <Typography variant="h5">{title}</Typography>}
      {children}
    </BlockWrapper>
  );
};

export default FormBlock;
