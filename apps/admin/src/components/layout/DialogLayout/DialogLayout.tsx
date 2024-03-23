import React, { ReactNode } from 'react';
import { styled, Box, Container, ContainerProps } from '@mui/material';
import { WithChildren } from '../../../types';
import { useDocumentMeta } from '../../../hooks';
import { CONTAINER_Y_OFFSET } from '../../../styles';
import { Footer } from '../Footer';

const WrapperBase = styled(Box)({
  width: '100%',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  overflowX: 'hidden',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
});
const WrapperInner = styled(Box)({
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
});

export interface DialogLayoutProps extends WithChildren {
  containerProps?: Partial<ContainerProps>;
  disableFooter?: boolean;
  meta?: {
    title?: string;
    description?: string;
  };
  backgroundSlot?: ReactNode;
}

const DialogLayout = ({ children, containerProps, disableFooter, meta, backgroundSlot }: DialogLayoutProps) => {
  useDocumentMeta(meta);

  return (
    <WrapperBase>
      <WrapperInner
        sx={{
          paddingY: CONTAINER_Y_OFFSET,
        }}
      >
        {backgroundSlot && backgroundSlot}
        <Container {...containerProps}>
          <main>{children}</main>
          {!disableFooter && <Footer disableHelpLink />}
        </Container>
      </WrapperInner>
    </WrapperBase>
  );
};

export default DialogLayout;
