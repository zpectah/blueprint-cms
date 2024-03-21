import React from 'react';
import { styled, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { CFG_CMS, CFG_PROJECT } from '@blueprint/core';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT, SPACING_BASE } from '../../../styles';
import { useAppContext } from '../../../contexts';
import { UserMenu } from '../UserMenu';
import { ConfigMenu } from '../ConfigMenu';
import { Spotlight } from '../Spotlight';

const HeaderBase = styled(Box)({
  width: '100%',
  background: 'rgb(5,5,5)',
  color: 'rgb(250,250,250)',
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
          <IconButton onClick={() => setSidebarOpen(!sidebarOpen)} color="inherit">
            <MenuIconElement />
          </IconButton>
        </HeaderPrimary>
        <HeaderTertiary>
          <HeaderCmsHeading>
            <Typography component="div">{CFG_CMS.name}</Typography>
            <Typography variant="caption">{CFG_PROJECT.name}</Typography>
          </HeaderCmsHeading>
        </HeaderTertiary>
        <HeaderSecondary>
          <Spotlight />
          <ConfigMenu />
          <UserMenu />
        </HeaderSecondary>
      </HeaderInner>
    </HeaderBase>
  );
};

export default Header;
