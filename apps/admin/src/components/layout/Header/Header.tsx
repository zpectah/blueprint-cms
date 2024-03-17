import React, { useMemo } from 'react';
import { styled, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CFG_CMS, CFG_PROJECT } from '@blueprint/core';
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

  const renderSecondary = useMemo(() => {
    return (
      <HeaderSecondary>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </HeaderSecondary>
    );
  }, []);

  const renderTertiary = useMemo(() => {
    return (
      <HeaderTertiary>
        <HeaderCmsHeading>
          <Typography component="div">{CFG_CMS.name}</Typography>
          <Typography component="div">{CFG_PROJECT.name}</Typography>
        </HeaderCmsHeading>
      </HeaderTertiary>
    );
  }, []);

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
        </HeaderPrimary>
        {renderTertiary}
        {renderSecondary}
      </HeaderInner>
    </HeaderBase>
  );
};

export default Header;
