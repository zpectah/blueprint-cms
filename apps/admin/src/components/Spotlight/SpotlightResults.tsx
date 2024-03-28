import React from 'react';
import { Link } from 'react-router-dom';
import { styled, Box, List, ListItem, ListItemText, ListItemButton, Typography, Chip, Divider } from '@mui/material';
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

const ResultModelItem = ({ model, path, results = [] }: SpotlightResultModel) => {
  const { setClose } = useSpotlightContext();

  return (
    <ResultModelItemWrapper divider sx={{ padding: 0 }}>
      <ListItemButton component={Link} to={path} onClick={setClose} sx={{ padding: 2 }}>
        <ListItemText>Found in {model}</ListItemText>
        <Chip label={results.length} />
      </ListItemButton>
    </ResultModelItemWrapper>
  );
};

const SpotlightResults = () => {
  const { query } = useSpotlightContext();
  const { results } = useSpotlightResults();

  if (results.length === 0 && query.length === 0) return null;

  return (
    <SpotlightResultsWrapper>
      <Divider />
      <List sx={{ padding: 0 }}>
        {results.map((item) => (
          <ResultModelItem key={item.index} {...item} />
        ))}
      </List>
      {results.length === 0 && (
        <Box sx={{ padding: 2 }}>
          <Typography>
            Nothing was found for <b>{query}</b>
          </Typography>
        </Box>
      )}
    </SpotlightResultsWrapper>
  );
};

export default SpotlightResults;
