import React from 'react';
import { Link } from 'react-router-dom';
import { styled, Box, List, ListItem, ListItemText, ListItemButton, Typography, Chip } from '@mui/material';
import { SPACING_BASE } from '../../styles';
import { SpotlightResultModel } from './types';
import { useSpotlightResults } from './useSpotlightResults';
import { useSpotlightContext } from './SpotlightContext';

const SpotlightResultsWrapper = styled(Box)({
  width: '100%',
  paddingTop: SPACING_BASE,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

const ResultModelItemWrapper = styled(ListItem)({});

const ResultModelItem = ({ index, model, path, results = [] }: SpotlightResultModel) => {
  const { setClose } = useSpotlightContext();

  return (
    <ResultModelItemWrapper key={index}>
      <ListItemButton component={Link} to={path} onClick={setClose}>
        <ListItemText>Found in {model}</ListItemText>
        <Chip label={results.length} />
      </ListItemButton>
    </ResultModelItemWrapper>
  );
};

const SpotlightResults = () => {
  const { query } = useSpotlightContext();
  const { results } = useSpotlightResults();

  if (results.length === 0) return null;

  return (
    <SpotlightResultsWrapper>
      <Typography variant="subtitle2">
        Results for: <b>"{query}"</b>
      </Typography>
      <List>
        {results.map((item) => (
          <ResultModelItem {...item} />
        ))}
      </List>
    </SpotlightResultsWrapper>
  );
};

export default SpotlightResults;
