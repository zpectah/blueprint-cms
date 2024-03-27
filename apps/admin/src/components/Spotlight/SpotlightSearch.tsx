import React, { useEffect, useRef } from 'react';
import { styled, Box } from '@mui/material';
import { SPACING_BASE } from '../../styles';
import { SearchInput } from '../input';
import { useSpotlightContext } from './SpotlightContext';
import { useAppContext } from '../../contexts';

const SpotlightSearchWrapper = styled(Box)({
  width: '100%',
  padding: SPACING_BASE,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

export interface SpotlightSearchProps {
  focusDelay?: number;
}

const SpotlightSearch = ({ focusDelay = 125 }: SpotlightSearchProps) => {
  const { spotlightOpen } = useAppContext();
  const { query, setQuery } = useSpotlightContext();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (spotlightOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), focusDelay);
    }
  }, [spotlightOpen, focusDelay, inputRef]);

  return (
    <SpotlightSearchWrapper>
      <SearchInput
        fullWidth
        placeholder="Type to search ..."
        inputRef={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </SpotlightSearchWrapper>
  );
};

export default SpotlightSearch;
