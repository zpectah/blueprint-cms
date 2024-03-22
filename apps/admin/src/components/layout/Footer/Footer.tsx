import React from 'react';
import { styled, Typography } from '@mui/material';
import { CFG_CMS } from '@blueprint/core';
import { SPACING_BASE } from '../../../styles';

const FooterWrapper = styled('footer')(({ theme }) => ({
  width: '100%',
  paddingTop: `calc(${SPACING_BASE} / 2)`,
  paddingBottom: `calc(${SPACING_BASE} / 2)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: SPACING_BASE,
  color: theme.palette.action.disabled,
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <Typography variant="caption" color="disabled">
        {CFG_CMS.copyright.year} &copy; {CFG_CMS.name} v{CFG_CMS.version}
      </Typography>
    </FooterWrapper>
  );
};

export default Footer;
