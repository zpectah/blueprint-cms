import React, { ReactNode } from 'react';
import { styled, Box, Typography } from '@mui/material';
import { WithChildren } from '../../../types';
import { SPACING_BASE } from '../../../styles';
import { useBreakpoint } from '../../../hooks';

const LayoutWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
});
const LayoutContent = styled(Box)({
  flex: 1,
});
const LayoutSidebar = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'isMobile',
})<{ readonly isMobile: boolean; readonly width: string }>(({ isMobile, width, theme }) => ({
  width: isMobile ? '100%' : width,
  padding: isMobile ? 0 : SPACING_BASE,
  paddingTop: isMobile ? SPACING_BASE : 0,
  marginLeft: isMobile ? 0 : SPACING_BASE,
  borderTop: isMobile ? `1px solid ${theme.palette.divider}` : 0,
}));
const ContentHeading = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  paddingTop: SPACING_BASE,
  paddingBottom: SPACING_BASE,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: SPACING_BASE,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
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

export interface ViewLayoutProps extends WithChildren {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  sidebarWidth?: string;
}

const ViewLayout = (props: ViewLayoutProps) => {
  const { children, title, subtitle, actions, sidebar, footer, sidebarWidth = '30%' } = props;

  const { isMobile } = useBreakpoint();

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
          <HeadingPrimary>
            <Typography>{title}</Typography>
            {subtitle && <Typography>{subtitle}</Typography>}
          </HeadingPrimary>
          {actions && <HeadingActions>{actions}</HeadingActions>}
        </ContentHeading>
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
