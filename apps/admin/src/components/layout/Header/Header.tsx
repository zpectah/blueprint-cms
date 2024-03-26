import React from 'react';
import { styled, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { CFG_CMS, CFG_PROJECT } from '@blueprint/core';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT, SPACING_BASE } from '../../../styles';
import { useAppContext } from '../../../contexts';
import { useBreakpoint } from '../../../hooks';
import { UserMenu } from '../UserMenu';
import { ConfigMenu } from '../ConfigMenu';
import { SpotlightTrigger } from '../SpotlightTrigger';

const HeaderBase = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'isMobile',
})<{ readonly isMobile: boolean }>(({ isMobile, theme }) => ({
  width: '100%',
  height: isMobile ? HEADER_MOBILE_HEIGHT : HEADER_DESKTOP_HEIGHT,
  background: 'rgb(5,5,5)',
  color: 'rgb(250,250,250)',
}));
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
  gap: SPACING_BASE,
  paddingLeft: SPACING_BASE,
  paddingRight: SPACING_BASE,
});
const HeaderPrimary = styled(HeaderInnerBox)({
  width: '35%',
  gap: `calc(${SPACING_BASE} * 2)`,
  justifyContent: 'flex-start',
});
const HeaderSecondary = styled(HeaderInnerBox)({
  width: '35%',
  justifyContent: 'flex-end',
});
const HeaderTertiary = styled(HeaderInnerBox)({
  width: '30%',
  textAlign: 'center',
  justifyContent: 'center',
});
const HeaderCmsHeading = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useAppContext();
  const { isMobile } = useBreakpoint();

  const MenuIconElement = sidebarOpen ? MenuOpenIcon : MenuIcon;

  return (
    <HeaderBase component="header" isMobile={isMobile}>
      <HeaderInner>
        <HeaderPrimary>
          <IconButton onClick={() => setSidebarOpen(!sidebarOpen)} color="inherit">
            <MenuIconElement />
          </IconButton>
        </HeaderPrimary>
        <HeaderTertiary>
          {!isMobile && (
            <HeaderCmsHeading>
              <Typography variant="h4" component="div" sx={{ lineHeight: 1.1 }}>
                {CFG_CMS.name}
              </Typography>
              <Typography
                sx={{
                  margin: 0,
                  fontSize: '.65rem',
                  fontWeight: 400,
                  letterSpacing: '.075em',
                  opacity: 0.5,
                }}
              >
                {CFG_PROJECT.name}
              </Typography>
            </HeaderCmsHeading>
          )}
        </HeaderTertiary>
        <HeaderSecondary>
          <SpotlightTrigger />
          <ConfigMenu />
          <UserMenu />
        </HeaderSecondary>
      </HeaderInner>
    </HeaderBase>
  );
};

export default Header;
