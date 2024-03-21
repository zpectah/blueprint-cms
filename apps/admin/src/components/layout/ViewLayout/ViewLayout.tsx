import React, { ReactNode } from 'react';
import { styled, Box, Typography } from '@mui/material';
import { WithChildren } from '../../../types';
import { SPACING_BASE } from '../../../styles';

const LayoutWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
});
const LayoutContent = styled(Box)({
  flex: 1,
});
const LayoutSidebar = styled(Box)({});
const ContentHeading = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: SPACING_BASE,
});
const ContentBody = styled(Box)({
  paddingTop: SPACING_BASE,
  paddingBottom: SPACING_BASE,
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
        <ContentBody>{children}</ContentBody>
        {footer && <ContentFooter>{footer}</ContentFooter>}
      </LayoutContent>
      {sidebar && (
        <LayoutSidebar
          component="aside"
          sx={{
            width: {
              xs: '100%',
              md: sidebarWidth,
            },
          }}
        >
          {sidebar}
        </LayoutSidebar>
      )}
    </LayoutWrapper>
  );
};

export default ViewLayout;
