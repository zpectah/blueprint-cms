import React from 'react';
import { styled, Box } from '@mui/material';
import { SPACING_BASE } from '../../styles';

const SpotlightResultsWrapper = styled(Box)({
  width: '100%',
  paddingTop: SPACING_BASE,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

export interface SpotlightResultsProps {
  query: string;
}

const SpotlightResults = ({ query }: SpotlightResultsProps) => {
  return <SpotlightResultsWrapper>results ... {query}</SpotlightResultsWrapper>;
};

export default SpotlightResults;
