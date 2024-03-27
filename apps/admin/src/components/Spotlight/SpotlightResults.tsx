import React from 'react';
import { Link } from 'react-router-dom';
import { styled, Box } from '@mui/material';
import { SPACING_BASE } from '../../styles';
import { useAppContext } from '../../contexts';
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

const ResultModelItemWrapper = styled(Box)({});

const ResultModelItem = ({ index, model, path, results = [] }: SpotlightResultModel) => {
  const { setSpotlightOpen } = useAppContext();
  const { setQuery } = useSpotlightContext();

  const closeHandler = () => {
    setSpotlightOpen(false);
    setQuery('');
  };

  return (
    <ResultModelItemWrapper key={index}>
      <div>{model}</div>
      <div>
        <Link to={path} onClick={closeHandler}>
          Go to
        </Link>
      </div>
      <div>{results.length}</div>
    </ResultModelItemWrapper>
  );
};

const SpotlightResults = () => {
  const { query } = useSpotlightContext();
  const { results } = useSpotlightResults();

  return (
    <SpotlightResultsWrapper>
      results for: "{query}"
      <div>
        {results.map((item) => (
          <ResultModelItem {...item} />
        ))}
      </div>
    </SpotlightResultsWrapper>
  );
};

export default SpotlightResults;
