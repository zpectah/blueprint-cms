import React from 'react';
import { Link } from 'react-router-dom';
import { styled, Typography } from '@mui/material';
import { CFG_CMS } from '@blueprint/core';
import { ROUTES } from '../../../config';
import { SPACING_BASE } from '../../../styles';

const FooterWrapper = styled('footer')(({ theme }) => ({
  width: '100%',
  paddingTop: `calc(${SPACING_BASE} / 2)`,
  paddingBottom: `calc(${SPACING_BASE} / 2)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: SPACING_BASE,
  color: theme.palette.text.disabled,
}));

export interface FooterProps {
  disableHelpLink?: boolean;
}

const Footer = ({ disableHelpLink }: FooterProps) => {
  return (
    <FooterWrapper>
      <Typography variant="caption" color="disabled">
        {CFG_CMS.copyright.year} &copy; {CFG_CMS.name} v{CFG_CMS.version}
        {!disableHelpLink && (
          <>
            &nbsp;|&nbsp;
            <Link to={ROUTES.help.path} style={{ color: 'inherit' }}>
              Help
            </Link>
          </>
        )}
      </Typography>
    </FooterWrapper>
  );
};

export default Footer;
