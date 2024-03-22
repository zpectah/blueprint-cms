import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, Box, Drawer, Typography } from '@mui/material';
import { SPACING_BASE } from '../../styles';
import { useBreakpoint } from '../../hooks';
import { DetailDrawerProps } from './types';
import DrawerCloseButton from './DrawerCloseButton';

const DrawerWrapper = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
});
const DrawerMain = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});
const DrawerSidebar = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'width',
})<{ readonly width: string }>(({ width, theme }) => ({
  width,
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  borderLeft: `1px solid ${theme.palette.divider}`,
}));
const DrawerSidebarScrollable = styled(Box)({
  width: 'calc(100% + 30px)',
  height: '100%',
  position: 'relative',
  overflowX: 'hidden',
  overflowY: 'auto',
});
const DrawerSidebarContent = styled(Box)({
  width: 'calc(100% - 30px)',
  height: 'auto',
  position: 'absolute',
  top: 0,
  left: 0,
  paddingLeft: SPACING_BASE,
  paddingRight: SPACING_BASE,
});
const DrawerHeader = styled(Box)({
  width: '100%',
  height: 'auto',
  padding: SPACING_BASE,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: SPACING_BASE,
});
const DrawerContainer = styled(Box)({
  position: 'relative',
  flex: 1,
  overflow: 'hidden',
});
const DrawerContainerScrollable = styled(Box)({
  width: 'calc(100% + 30px)',
  height: '100%',
  position: 'relative',
  overflowX: 'hidden',
  overflowY: 'auto',
});
const DrawerContainerContent = styled(Box)({
  width: 'calc(100% - 30px)',
  height: 'auto',
  position: 'absolute',
  top: 0,
  left: 0,
  paddingLeft: SPACING_BASE,
  paddingRight: SPACING_BASE,
});
const DrawerFooter = styled(Box)({
  width: '100%',
  height: 'auto',
  padding: SPACING_BASE,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: SPACING_BASE,
});
const HeaderContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: SPACING_BASE,
});
const HeaderContainerActions = styled(Box)({});
const HeaderContainerContent = styled(Box)({});
const HeaderActions = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: `calc(${SPACING_BASE} / 2)`,
});

const DetailDrawer = (props: DetailDrawerProps) => {
  const {
    id,
    route,
    title,
    subtitle,
    headerActions,
    actions,
    children,
    drawerProps,
    sidebar,
    sidebarWidth = '30%',
  } = props;

  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const { isMobile } = useBreakpoint();

  const closeHandler = () => navigate(route);

  useEffect(() => setOpen(!!id), [id]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={closeHandler}
      PaperProps={{
        sx: {
          width: {
            xs: '100%',
            md: sidebar ? '75vw' : '60vw',
          },
        },
      }}
      {...drawerProps}
    >
      <DrawerWrapper>
        <DrawerMain>
          <DrawerHeader>
            <HeaderContainer>
              <HeaderContainerActions>
                <DrawerCloseButton isMobile={isMobile} onClick={closeHandler} />
              </HeaderContainerActions>
              <HeaderContainerContent>
                {title && <Typography>{title}</Typography>}
                {subtitle && <Typography variant="caption">{subtitle}</Typography>}
              </HeaderContainerContent>
            </HeaderContainer>
            <HeaderActions>{headerActions && headerActions}</HeaderActions>
          </DrawerHeader>
          <DrawerContainer>
            <DrawerContainerScrollable>
              <DrawerContainerContent>
                <div>{children}</div>
                {isMobile && sidebar && <div>{sidebar}</div>}
              </DrawerContainerContent>
            </DrawerContainerScrollable>
          </DrawerContainer>
          <DrawerFooter>{actions}</DrawerFooter>
        </DrawerMain>
        {sidebar && !isMobile && (
          <DrawerSidebar width={sidebarWidth}>
            <DrawerSidebarScrollable>
              <DrawerSidebarContent>{sidebar}</DrawerSidebarContent>
            </DrawerSidebarScrollable>
          </DrawerSidebar>
        )}
      </DrawerWrapper>
    </Drawer>
  );
};

export default DetailDrawer;
