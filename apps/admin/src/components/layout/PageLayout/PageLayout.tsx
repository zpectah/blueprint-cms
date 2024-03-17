import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled, Box, Container } from '@mui/material';
import { useAppContext } from '../../../contexts';
import { CONTAINER_Y_OFFSET, SIDEBAR_DESKTOP_WIDTH, SPACING_BASE } from '../../../styles';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';

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
const WrapperInner = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  position: 'relative',
});
const Content = styled('main')({
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

const PageLayout = () => {
  const { sidebarOpen } = useAppContext();

  return (
    <WrapperBase>
      <Header />
      <WrapperInner
        sx={{
          width: {
            xs: '100%',
            md: sidebarOpen ? `calc(100% - ${SIDEBAR_DESKTOP_WIDTH})` : '100%',
          },
          left: {
            xs: 0,
            md: sidebarOpen ? SIDEBAR_DESKTOP_WIDTH : 0,
          },
        }}
      >
        <Sidebar />
        <Content>
          <ContentScrollable>
            <Container
              sx={{
                paddingY: CONTAINER_Y_OFFSET,
                display: 'flex',
                flexDirection: 'column',
                gap: SPACING_BASE,
              }}
            >
              <Outlet />
              <Footer />
            </Container>
          </ContentScrollable>
        </Content>
      </WrapperInner>
    </WrapperBase>
  );
};

export default PageLayout;
