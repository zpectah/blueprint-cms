import React, { useEffect, useRef } from 'react';
import { styled, Box } from '@mui/material';
import { SPACING_BASE } from '../../styles';
import { SearchInput } from '../input';
import { useSpotlightContext } from './SpotlightContext';

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
  const { open, query, setQuery } = useSpotlightContext();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), focusDelay);
    }
  }, [open, focusDelay, inputRef]);

  return (
    <SpotlightSearchWrapper>
      <SearchInput
        fullWidth
        placeholder="Fulltext search"
        inputRef={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </SpotlightSearchWrapper>
  );
};

export default SpotlightSearch;
