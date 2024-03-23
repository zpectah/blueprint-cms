import React from 'react';
import { styled, Box, Alert } from '@mui/material';
import { useAppContext } from '../../../contexts';
import {
  SIDEBAR_DESKTOP_WIDTH,
  SIDEBAR_MOBILE_WIDTH,
  HEADER_DESKTOP_HEIGHT,
  HEADER_MOBILE_HEIGHT,
  PALETTE,
  SPACING_BASE,
} from '../../../styles';
import { themeModeKeys } from '../../../enums';
import { PrimaryMenu } from '../PrimaryMenu';
import { useBreakpoint } from '../../../hooks';

const SidebarBase = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'isMobile',
})<{ readonly isMobile: boolean; readonly open: boolean }>(({ theme, isMobile, open }) => ({
  position: 'fixed',
  zIndex: 750,
  display: 'flex',
  flexDirection: 'column',
  borderRight: isMobile ? 0 : `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create(['width', 'left'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
    delay: 0,
  }),
  backgroundColor:
    theme.palette.mode === themeModeKeys.light ? PALETTE.backgroundDefault.light : PALETTE.backgroundDefault.dark,
  width: isMobile ? SIDEBAR_MOBILE_WIDTH : SIDEBAR_DESKTOP_WIDTH,
  height: isMobile ? `calc(100% - ${HEADER_MOBILE_HEIGHT})` : `calc(100% - ${HEADER_DESKTOP_HEIGHT})`,
  top: isMobile ? HEADER_MOBILE_HEIGHT : HEADER_DESKTOP_HEIGHT,
  left: isMobile ? (open ? 0 : `calc(${SIDEBAR_MOBILE_WIDTH} * -1)`) : open ? 0 : `calc(${SIDEBAR_DESKTOP_WIDTH} * -1)`,
}));
const SidebarPrimary = styled(Box)({
  position: 'relative',
  flex: 1,
  overflow: 'hidden',
});
const SidebarScrollable = styled('div')({
  width: 'calc(100% + 30px)',
  height: '100%',
  position: 'relative',
  overflowX: 'hidden',
  overflowY: 'auto',
});
const SidebarScrollableContent = styled('div')({
  width: 'calc(100% - 30px)',
  height: 'auto',
  position: 'absolute',
  top: 0,
  left: 0,
});
const SidebarSecondary = styled(Box)({
  padding: SPACING_BASE,
});

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useAppContext();
  const { isMobile } = useBreakpoint();

  return (
    <SidebarBase id="cms-sidebar" component="aside" isMobile={isMobile} open={sidebarOpen}>
      <SidebarPrimary>
        <SidebarScrollable>
          <SidebarScrollableContent>
            <PrimaryMenu onMobileMenuItemClick={() => setSidebarOpen(false)} />
          </SidebarScrollableContent>
        </SidebarScrollable>
      </SidebarPrimary>
      <SidebarSecondary>
        <Alert severity="info" icon={false}>
          Some information string about profile settings, etc.
        </Alert>
      </SidebarSecondary>
    </SidebarBase>
  );
};

export default Sidebar;
