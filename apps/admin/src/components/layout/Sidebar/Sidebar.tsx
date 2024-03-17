import React from 'react';
import { styled, Box } from '@mui/material';
import { useAppContext } from '../../../contexts';
import {
  SIDEBAR_DESKTOP_WIDTH,
  SIDEBAR_MOBILE_WIDTH,
  HEADER_DESKTOP_HEIGHT,
  HEADER_MOBILE_HEIGHT,
  PALETTE,
} from '../../../styles';
import { themeModeKeys } from '../../../enums';
import { PrimaryMenu } from '../PrimaryMenu';

const SidebarBase = styled(Box)({
  position: 'fixed',
  zIndex: 750,
  display: 'flex',
  flexDirection: 'column',
});
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
const SidebarSecondary = styled(Box)({});

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useAppContext();

  return (
    <SidebarBase
      component="aside"
      sx={(theme) => ({
        width: {
          xs: sidebarOpen ? SIDEBAR_MOBILE_WIDTH : 0,
          md: sidebarOpen ? SIDEBAR_DESKTOP_WIDTH : 0,
        },
        left: {
          xs: sidebarOpen ? 0 : `calc(${SIDEBAR_MOBILE_WIDTH} * -1)`,
          md: sidebarOpen ? 0 : `calc(${SIDEBAR_DESKTOP_WIDTH} * -1)`,
        },
        top: {
          xs: HEADER_MOBILE_HEIGHT,
          md: HEADER_DESKTOP_HEIGHT,
        },
        height: {
          xs: `calc(100% - ${HEADER_MOBILE_HEIGHT})`,
          md: `calc(100% - ${HEADER_DESKTOP_HEIGHT})`,
        },
        backgroundColor: {
          xs:
            theme.palette.mode === themeModeKeys.light
              ? PALETTE.backgroundDefault.light
              : PALETTE.backgroundDefault.dark,
          md: 'inherit',
        },
      })}
    >
      <SidebarPrimary>
        <SidebarScrollable>
          <SidebarScrollableContent>
            <PrimaryMenu onMobileMenuItemClick={() => setSidebarOpen(false)} />
          </SidebarScrollableContent>
        </SidebarScrollable>
      </SidebarPrimary>
      <SidebarSecondary>{/* TODO */}</SidebarSecondary>
    </SidebarBase>
  );
};

export default Sidebar;
