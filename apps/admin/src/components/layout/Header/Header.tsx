import React from 'react';
import { styled, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT, SPACING_BASE } from '../../../styles';
import { useAppContext } from '../../../contexts';

const HeaderBase = styled(Box)({
  width: '100%',

  // TODO
  backgroundColor: 'rgba(25,25,25,.5)',
});
const HeaderInner = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const HeaderInnerBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: SPACING_BASE,
  paddingLeft: SPACING_BASE,
  paddingRight: SPACING_BASE,
});
const HeaderPrimary = styled(HeaderInnerBox)({
  gap: `calc(${SPACING_BASE} * 2)`,
});
const HeaderSecondary = styled(HeaderInnerBox)({});
const HeaderTertiary = styled(HeaderInnerBox)({});

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useAppContext();

  const MenuIconElement = sidebarOpen ? MenuOpenIcon : MenuIcon;

  return (
    <HeaderBase
      component="header"
      sx={{
        height: {
          xs: HEADER_MOBILE_HEIGHT,
          md: HEADER_DESKTOP_HEIGHT,
        },
      }}
    >
      <HeaderInner>
        <HeaderPrimary>
          <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
            <MenuIconElement />
          </IconButton>
          <Typography variant="h6" component="div">
            Logo
          </Typography>
        </HeaderPrimary>
        <HeaderTertiary>HeaderTertiary</HeaderTertiary>
        <HeaderSecondary>HeaderSecondary</HeaderSecondary>
      </HeaderInner>
    </HeaderBase>
  );
};

export default Header;
