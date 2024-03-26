import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { styled, Box, Container } from '@mui/material';
import { PAGE_LAYOUT_NOTIFICATION_LIST_ID } from '../../../constants';
import { useAppContext } from '../../../contexts';
import { useBreakpoint } from '../../../hooks';
import { CONTAINER_Y_OFFSET, SIDEBAR_DESKTOP_WIDTH, SPACING_BASE } from '../../../styles';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { NotificationsList } from '../NotificationsList';
import { Spotlight } from '../../Spotlight';
import PageLayoutPreloader from './PageLayoutPreloader';

const WrapperBase = styled(Box)({
  width: '100%',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});
const WrapperInner = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'isMobile' && propName !== 'open',
})<{ readonly open: boolean; readonly isMobile: boolean }>(({ open, isMobile, theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  position: 'relative',
  width: isMobile ? '100%' : open ? `calc(100% - ${SIDEBAR_DESKTOP_WIDTH})` : '100%',
  left: isMobile ? 0 : open ? SIDEBAR_DESKTOP_WIDTH : 0,
  transition: theme.transitions.create(['width', 'left'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
    delay: 0,
  }),
}));
const ContentOuter = styled(Box)({ flex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' });
const ContentContainer = styled('main')({
  flex: 1,
  width: '100%',
  height: '100%',
  position: 'relative',
  overflowX: 'hidden',
  overflowY: 'auto',
});
const ContentScrollable = styled('div')({
  width: '100%',
  height: 'auto',
  position: 'absolute',
  top: 0,
  left: 0,
});
const Content = styled(Container)({
  paddingTop: CONTAINER_Y_OFFSET,
  paddingBottom: CONTAINER_Y_OFFSET,
  display: 'flex',
  flexDirection: 'column',
  gap: SPACING_BASE,
});

const PageLayout = () => {
  const { sidebarOpen } = useAppContext();
  const { isMobile } = useBreakpoint();

  return (
    <WrapperBase>
      <Header />
      <WrapperInner open={sidebarOpen} isMobile={isMobile}>
        <Sidebar />
        <ContentOuter>
          <NotificationsList id={PAGE_LAYOUT_NOTIFICATION_LIST_ID} />
          <ContentContainer>
            <ContentScrollable>
              <Content>
                <Suspense fallback={<PageLayoutPreloader />}>
                  <Outlet />
                </Suspense>
                <Footer />
              </Content>
            </ContentScrollable>
          </ContentContainer>
        </ContentOuter>
      </WrapperInner>
      <Spotlight />
    </WrapperBase>
  );
};

export default PageLayout;
