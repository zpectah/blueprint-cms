import React, { ReactNode } from 'react';
import { styled, Box, Typography, Alert, AlertTitle, AlertProps } from '@mui/material';
import { WithChildren } from '@blueprint/types';
import { SPACING_BASE } from '../../../styles';
import { useBreakpoint, useDocumentMeta } from '../../../hooks';

const LayoutWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
});
const LayoutContent = styled(Box)({
  flex: 1,
});
const LayoutSidebar = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'isMobile' && propName !== 'width',
})<{ readonly isMobile: boolean; readonly width: string }>(({ isMobile, width, theme }) => ({
  width: isMobile ? '100%' : width,
  padding: isMobile ? 0 : SPACING_BASE,
  paddingTop: isMobile ? SPACING_BASE : 0,
  marginLeft: isMobile ? 0 : SPACING_BASE,
  borderTop: isMobile ? `1px solid ${theme.palette.divider}` : 0,
}));
const ContentHeading = styled(Box)(({ theme }) => ({
  width: '100%',
  paddingTop: SPACING_BASE,
  paddingBottom: `calc(${SPACING_BASE} * 2)`,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
const ContentHeadingContent = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: SPACING_BASE,
});
const ContentInner = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'isMobile',
})<{ readonly isMobile: boolean }>(({ isMobile, theme }) => ({
  paddingTop: SPACING_BASE,
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row',
}));
const ContentBody = styled(Box)({
  paddingTop: SPACING_BASE,
  paddingBottom: SPACING_BASE,
  flex: 1,
});
const ContentFooter = styled(Box)({});
const HeadingPrimary = styled(Box)({});
const HeadingActions = styled(Box)({});
const MessagesWrapper = styled(Box)({
  paddingTop: SPACING_BASE,
  paddingBottom: SPACING_BASE,
  display: 'flex',
  flexDirection: 'column',
  gap: SPACING_BASE,
});

type AlertMessageProps = {
  key: string | number;
  title?: ReactNode;
} & Partial<AlertProps>;

export interface ViewLayoutProps extends WithChildren {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  sidebarWidth?: string;
  alerts?: AlertMessageProps[];
  meta?: {
    title?: string;
    description?: string;
  };
}

const ViewLayout = (props: ViewLayoutProps) => {
  const { children, title, subtitle, actions, sidebar, footer, sidebarWidth = '30%', alerts = [], meta } = props;

  const { isMobile } = useBreakpoint();

  useDocumentMeta(meta);

  return (
    <LayoutWrapper
      sx={{
        gap: {
          xs: SPACING_BASE,
          md: `calc(${SPACING_BASE} * 2)`,
        },
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
    >
      <LayoutContent>
        <ContentHeading>
          <ContentHeadingContent>
            <HeadingPrimary>
              <Typography variant="h2">{title}</Typography>
              {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
            </HeadingPrimary>
            {actions && <HeadingActions>{actions}</HeadingActions>}
          </ContentHeadingContent>
        </ContentHeading>
        {alerts.length > 0 && (
          <MessagesWrapper>
            {alerts.map(({ key, children, title, ...rest }) => (
              <Alert key={key} {...rest}>
                {title && <AlertTitle>{title}</AlertTitle>}
                {children}
              </Alert>
            ))}
          </MessagesWrapper>
        )}
        <ContentInner isMobile={isMobile}>
          <ContentBody>{children}</ContentBody>
          {sidebar && (
            <LayoutSidebar component="aside" isMobile={isMobile} width={sidebarWidth}>
              {sidebar}
            </LayoutSidebar>
          )}
        </ContentInner>
        {footer && <ContentFooter>{footer}</ContentFooter>}
      </LayoutContent>
    </LayoutWrapper>
  );
};

export default ViewLayout;
